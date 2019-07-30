import React from 'react';
import _ from 'lodash';

import { Link, safePrefix, htmlToReact } from '../utils';

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="colophon" className="site-footer">
        <div className="footer-top outer">
          <div className="inner">
            <div className="footer-widgets">
              {/* Logo Starts */}
              <div className="widget footer-branding">
                <p className="site-logo">
                  <Link to={safePrefix('/')}><img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.footer.logo_img'))} alt="Logo" /></Link>
                </p>
              </div>
              {/* Logo Ends */}

              {/* Menu Starts */}
              <nav className="widget footer-navigation">
                <div className="footer-nav-inside">
                    <div className="secondary-nav">
                      <ul className="secondary-menu">
                        {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.menus'), (item, item_idx) => (
                          <li key={item_idx}>
                            <Link to={safePrefix(`${_.get(this.props, 'pageContext.locale')}/${_.get(item, 'url')}`)}>{_.get(item, `title[${_.get(this.props, 'pageContext.locale')}]`)}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                </div>
              </nav>
              {/* Menu Ends */}
            </div>
          </div>
        </div>
        {/* Copyright Starts */}
        <div className="site-info outer">
          <div className="inner">
            {htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content'))}
            &nbsp;
                  {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links'), (link, link_idx) => (<React.Fragment key={link_idx}>
              <Link key={link_idx} to={_.get(link, 'url')} {...(_.get(link, 'new_window') ? { target: '_blank', rel: 'noopener' } : null)}>{_.get(link, 'text')}</Link>.
                  </React.Fragment>))}
          </div>
        </div>
        {/* Copyright Ends */}
      </footer>
    );
  }
}
