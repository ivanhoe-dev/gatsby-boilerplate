import React from 'react';
import _ from 'lodash';

import { Link, safePrefix } from '../utils';

export default class Header extends React.Component {
  render() {
    return (
      <header id="masthead" className="site-header outer">
        <div className="inner">
          <div className="site-header-inside">
            {/* Logo Starts */}
            <div className="site-branding">
              {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img') &&
                <p className="site-logo">
                  <Link to={safePrefix(`${_.get(this.props, 'pageContext.locale')}/`)}>
                    <img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img'))} alt="Logo" />
                  </Link>
                </p>
              }
            </div>
            {/* Logo Ends */}
            {(_.get(this.props, 'pageContext.site.siteMetadata.header.menus')) && <React.Fragment>
              <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                <div className="site-nav-inside">
                  {/* Hamburger Starts */}
                  <button id="menu-close" className="menu-toggle"><span className="screen-reader-text">Open Menu</span><span
                    className="icon-close" aria-hidden="true" /></button>
                  {/* Hamburger Ends */}

                  {/* Locale Ends */}
                  <ul className="menu">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.locale.list'), (item, item_idx) => (
                      <li key={item_idx} className='menu-item'>
                        <Link to={safePrefix(`${item.value}/${_.get(this.props, 'pageContext.rawUrl')}`)}>{item.key}</Link>
                      </li>
                    ))}
                  </ul>
                  {/* Locale Ends */}
                  
                  {/* Menu Starts */}
                  <ul className="menu">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.menus'), (item, item_idx) => (
                      <li key={item_idx} className={'menu-item ' + ((_.get(this.props, 'pageContext.url') === _.get(item, 'url')) ? ' current-menu-item' : '')}>
                        <Link to={safePrefix(`${_.get(this.props, 'pageContext.locale')}/${_.get(item, 'url')}`)}>{_.get(item, `title[${_.get(this.props, 'pageContext.locale')}]`)}</Link>
                      </li>
                    ))}
                  </ul>
                  {/* Menu Ends */}
                </div>
              </nav>
              {/* Mobile Close Toggle Starts */}
              <button id="menu-open" className="menu-toggle"><span className="screen-reader-text">Close Menu</span><span className="icon-menu"
                aria-hidden="true" /></button>
              {/* Mobile Close Toggle Ends */}
            </React.Fragment>}
          </div>
        </div>
      </header>
    );
  }
}
