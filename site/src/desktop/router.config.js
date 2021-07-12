import configs from '../../configs/nav.config';
import { documents } from '../../configs/site-desktop-shared';

function decamelize(str, sep = '-') {
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    .toLowerCase();
}

function parseName(name) {
  if (name.indexOf('_') !== -1) {
    const pairs = name.split('_');
    const component = pairs.shift();

    return {
      component: `${decamelize(component)}`,
      lang: pairs.join('-'),
    };
  }

  return {
    component: `${decamelize(name)}`,
    lang: '',
  };
}


function getRoutes() {
  const routes = [];
  const names = Object.keys(documents);



  names.forEach(name => {
    const { component, lang } = parseName(name);

    if (lang) {
      routes.push({
        name: `${lang}/${component}`,
        path: `/${lang}/${component}`,
        component: documents[name],
      })
    }
  })

  return routes;
}

export default getRoutes;
