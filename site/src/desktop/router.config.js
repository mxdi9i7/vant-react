const registerRoute = (navData, oreo = '') => {
  let route = [];

  if (!navData) return route;

  function addRoute(page) {
    const { path, source, title } = page;
    route.push({
      path: `${oreo}/${path}`,
      source,
      title,
    });
  }

  navData.forEach(nav => {
    if (nav.list) {
      nav.list.forEach(subNav => {
        addRoute(subNav);
      });
    } else if (nav.children) {
      nav.children.forEach(subNav => {
        addRoute(subNav);
      });
    } else {
      addRoute(nav);
    }
  });

  return route;
};

export { registerRoute };
