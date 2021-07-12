import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { prefix } from '../../../../constants';

import './style.scss';

export default class SideNav extends Component {

  parseData = (item, index) => (
    <div className="van-doc-nav__item" key={`nav-${index}`}>
      <div className="van-doc-nav__title">
        {item.name}
      </div>
      {item.list && item.list.map(this.parseList)}
    </div>
  );

  parseList = (navItem, index) => {
    const { title, subtitle, hidden, link } = navItem;

    if (hidden) {
      return null;
    }

    const linkTitle = subtitle ? (
      <span>
        {title} <span>{subtitle}</span>
      </span>
    ) : (
      title
    );

    return navItem.disabled ? null : (
      <div className="van-doc-nav__item" key={`nav-list-${index}`}>
        <NavLink
          activeClassName="active"
          exact
          to={`/${this.props.i18n}/${navItem.path}`}
        >
          {linkTitle}
        </NavLink>
      </div>
    );
  };

  render() {
    const { data, className } = this.props;
    return (
      <div className={classnames('van-doc-nav', {
        [className]: !!className,
      })}>
        {data.map(this.parseData)}
      </div>
    );
  }
}
