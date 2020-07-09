import { demos, config } from '../../configs/site-mobile-shared';
import { decamelize } from '../../utils';

export function getRoutes() {
  const routes = [];
  const names = Object.keys(demos);
  const langs = config ? Object.keys(config) : [];

  names.forEach(name => {
    const component = decamelize(name);

    if (langs.length) {
      langs.forEach(lang => {
        routes.push({
          name: `${lang}/${component}`,
          path: `/${lang}/${component}`,
          component: demos[name],
          meta: {
            name,
            lang,
          },
        });
      });
    } else {
      routes.push({
        name,
        path: `/${component}`,
        component: demos[name],
        meta: {
          name,
        },
      });
    }
  });

  return routes;
}
