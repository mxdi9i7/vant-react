import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import ScrollToTop from './components/scroll-to-top';
import { version as pkgVersion } from '../../configs/doc.config';
import navConfig from '../../configs/nav.config';
import { prefix } from '../../constants';
import DocContent from './components/content';
import getRoutes from './router.config';

const routes = getRoutes();
export default class App extends Component {
  state = {
    i18n: 'zh-CN',
  };

  changeI18N = target => {
    this.setState({
      i18n: target,
    });
  };

  render() {
    const { i18n } = this.state;
    const sideNavData = navConfig[i18n].nav;
    const passthrough = i18nStr => ({
      version: pkgVersion,
      sideNavData: sideNavData,
      changeI18N: this.changeI18N,
      prefix,
      i18n,
    });
    return (
        <Router key={module.hot ? Math.random() : null}>
          <DocContent {...passthrough('zh-CN')}>
            <ScrollToTop>
              <Switch>
                {
                  routes.map(item => <Route path={item.path} component={item.component} key={item.name} />)
                }
                <Redirect from="/*" to={`${i18n}/quickstart`} />
              </Switch>
            </ScrollToTop>
          </DocContent>
        </Router>
    )
  }
}