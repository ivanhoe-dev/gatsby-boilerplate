import React from 'react';
import _ from 'lodash';

import { safePrefix, markdownify, Link } from '../utils';

export default class HeroBlock extends React.Component {
  render() {
    return (
      <section id={_.get(this.props, 'section.section_id')} className="block hero-block bg-accent outer">
        <div className="inner">
          <div className="grid">
            <div className="cell block-content">
              <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
              <div className="block-copy">
                {markdownify(_.get(this.props, 'section.content'))}
              </div>
              {_.get(this.props, 'section.actions') &&
                <p className="block-buttons">
                  {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
                    <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button white large">{_.get(action, 'label')}</Link>
                  ))}
                </p>
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
