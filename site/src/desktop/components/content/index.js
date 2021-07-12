import React from 'react';
import { withRouter } from "react-router-dom";
import classnames from 'classnames';

import PageHeader from '../header';
import SideNav from '../side-nav';
import { prefix } from '../../../../constants';
import './styles.scss';


function Layout({
  i18n,
  children,
  version,
  sideNavData,
  sideNavRef,
  location,
}) {
  const { pathname } = location;
  const withSimulator = true;

  const [ innerHeight, setInnerHeight ] = React.useState(window.innerHeight);
  const [ scrollY, setScrollY ] = React.useState(window.scrollY);
  const iframeRef = React.useRef(null);

  const simulatorStyles = React.useMemo(() => {
    const height = Math.min(640, innerHeight - 90);
    return { 
      height: height + 'px',
    }
  }, [innerHeight])

  const isFixed = React.useMemo(() => {
    return scrollY > 60;
  }, [scrollY])

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });
    window.addEventListener('resize', () => {
      setInnerHeight(window.innerHeight);
    });
  }, [])
  
  return (
    <div className="van-doc">
      <PageHeader version={version} i18n={i18n} sideNavData={sideNavData} />
      <SideNav data={sideNavData} i18n={i18n} ref={sideNavRef} className={classnames({
        'van-doc-nav-fixed': isFixed,
      })}/>
      <div className={classnames('van-doc-container van-doc-row', {
        'van-doc-container--with-simulator': withSimulator,
      })}>
        <div className="van-doc-content">
          <div >{children}</div>
        </div>
        {withSimulator && <div className={classnames('van-doc-simulator', {
          'van-doc-simulator-fixed': isFixed
        })}>
          <iframe ref={iframeRef} src={`${prefix}simulator.html#${pathname}`} style={simulatorStyles} frameBorder="0" ></iframe>
        </div>}
      </div>
    </div>
  );
}

export default withRouter(Layout);
