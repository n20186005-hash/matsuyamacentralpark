(() => {
  'use strict';

  const storageKey = 'matsuyama-central-park:selected-route';

  const safelyStore = (value) => {
    try {
      window.localStorage.setItem(storageKey, value);
    } catch {
      // 保存できない環境では、ページ内の選択だけを反映します。
    }
  };

  const safelyRead = () => {
    try {
      return window.localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  };

  document.querySelectorAll('[data-route-planner]').forEach((planner) => {
    const dataElement = planner.querySelector('[data-route-data]');
    if (!(dataElement instanceof HTMLScriptElement)) return;

    let routes = [];
    try {
      routes = JSON.parse(dataElement.textContent || '[]');
    } catch {
      return;
    }

    const buttons = [...planner.querySelectorAll('[data-route-id]')];
    const title = planner.querySelector('[data-route-title]');
    const summary = planner.querySelector('[data-route-summary]');
    const duration = planner.querySelector('[data-route-duration]');
    const distance = planner.querySelector('[data-route-distance]');
    const recommendation = planner.querySelector('[data-route-recommendation]');
    const link = planner.querySelector('[data-route-link]');
    const iconUse = planner.querySelector('.route-planner__result-icon use');

    const selectRoute = (routeId, store = true) => {
      const route = routes.find((item) => item.id === routeId) || routes[0];
      if (!route) return;

      buttons.forEach((button) => {
        const active = button.getAttribute('data-route-id') === route.id;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      if (title) title.textContent = route.name;
      if (summary) summary.textContent = route.summary;
      if (duration) duration.textContent = route.duration;
      if (distance) distance.textContent = route.distance;
      if (recommendation) recommendation.textContent = route.recommendation;
      if (link instanceof HTMLAnchorElement) link.href = `/visit/#${route.id}-route`;
      if (iconUse) iconUse.setAttribute('href', `/icons.svg#icon-${route.icon}`);
      if (store) safelyStore(route.id);
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => selectRoute(button.getAttribute('data-route-id')));
    });

    const savedRoute = safelyRead();
    if (savedRoute && routes.some((route) => route.id === savedRoute)) {
      selectRoute(savedRoute, false);
    }
  });

  const header = document.querySelector('[data-site-header]');
  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 14);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  document.querySelectorAll('.mobile-menu').forEach((menu) => {
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => menu.removeAttribute('open'));
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.mobile-menu[open]').forEach((menu) => menu.removeAttribute('open'));
  });
})();
