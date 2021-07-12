import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchBox from '../search-box';
import { versions } from '../../../../configs/doc.config';
import navConfigs from '../../../../configs/nav.config';

import './style.scss';

const CONTROLLS = {
  'zh-CN': 'EN',
  'en-US': '中文',
};

class Header extends Component {

  toggle = () => {
    const { replace } = this.context.router.history;
    const path = this.context.router.route.location.pathname.split('/');
    if (path[1] === 'en') {
      path[1] = 'zh';
    } else {
      path[1] = 'en';
    }
    replace(path.join('/'));
  };

  render() {
    const { i18n, sideNavData } = this.props;
    const { header } = navConfigs[i18n];

    const { nav, logo } = header;

    return (
      <div className="van-doc-header">
        <div className="van-doc-row">
          <div className="van-doc-header__top">
            <a href={logo.href} className="van-doc-header__logo">
              <img
                src={logo.image}
                alt="logo"
              />
              <span>{logo.title}</span>
            </a>
            <SearchBox locale={i18n} navData={sideNavData} />
            <ul className="van-doc-header__top-nav">
              {
                nav.logoLink.map(item => (
                  <li className="van-doc-header__top-nav-item" key={item.url}>
                    <a className="van-doc-header__logo-link" target="_blank" href={item.url}>
                      <img src={item.image} />
                    </a>
                  </li>
                  )
                )
              }

              <li ref="version" v-if="versions" className="van-doc-header__top-nav-item">
                <span
                  className="van-doc-header__cube van-doc-header__version"
                >
                  { versions[0] }
                </span>
              </li>
              <li v-if="config.nav.lang" className="van-doc-header__top-nav-item">
                <a
                  className="van-doc-header__cube"
                  href="langLink"
                >
                  {nav.lang.text}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);