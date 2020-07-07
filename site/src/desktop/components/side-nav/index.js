import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import RouterContext from '../router-context-type';
import { prefix } from '../../../../constants';

import './style.scss';

export default class SideNav extends Component {
  static contextTypes = RouterContext;

  handleTitleClick = item => {
    if (item.list[0].list[0].path) {
      this.context.router.history.push(
        getFullPath(this.props.base, item.list[0].list[0].path)
      );
    }
  };

  parseData = (item, index) => (
    <div className="van-doc-nav__item" key={`nav-${index}`}>
      <div className="van-doc-nav__title">
        {item.name}
      </div>
      {item.list && item.list.map(this.parseList)}
    </div>
  );

  parseGroup = (group, index) => (
    <div className="nav-group" key={`nav-group-${index}`}>
      <div className="van-doc-nav__group-title">{group.groupName}</div>
      {group.list.map(this.parseList)}
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
        {navItem.link ? (
          <a
            href={`${prefix}${link}`}
            rel="noopener noreferrer"
          >
            {title}
          </a>
        ) : (
          <NavLink
            activeClassName="active"
            exact
            to={getFullPath(this.props.base, navItem.path)}
          >
            {linkTitle}
          </NavLink>
        )}
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

function getFullPath(base, path) {
  return `${base}/${path}`;
}
