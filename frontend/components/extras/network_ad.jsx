import React from 'react';

import { Link } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class NetworkAd extends React.Component {
  render() {
    return (
      <aside className="network-ad">
        <header className="header">
          <div className="ad-title">
            <h5>New from</h5>
            <h5>your network</h5>
          </div>
          <div className="oval">
            <img src="https://bit.ly/2rYVKFW" className="ad-img"/>
          </div>
        </header>
        <div className="ad-body">
          <div className="ad-content">
            <div className="single-ad">
              <div className="ad-icon">
                <FontAwesomeIcon icon={['fas', 'bolt']} size="2x"/>
              </div>
              <div className="ad-blub">
                <div className="sing-ad-title">Catching Fire</div>
                <p className="ad-author">The Nib</p>
                <p className="ad-author grey-ify">a few minutes ago ~ 1 min read</p>
              </div>
            </div>
            <div className="single-ad">
              <div className="ad-icon">
                <FontAwesomeIcon icon={['fas', 'bolt']} size="2x"/>
              </div>
              <div className="ad-blub">
                <div className="sing-ad-title">How to do everything</div>
                <p className="ad-author">Journey</p>
                <p className="ad-author grey-ify">May 21 ~ 3 min read</p>
              </div>
            </div>
            <div className="single-ad">
              <div className="ad-icon">
                <FontAwesomeIcon icon={['fas', 'bolt']} size="2x"/>
              </div>
              <div className="ad-blub">
                <div className="sing-ad-title">The meaning of life</div>
                <p className="ad-author">Calvin and Hobbes</p>
                <p className="ad-author grey-ify">May 20 ~ 2 min read</p>
              </div>
            </div>
            <div className="single-ad">
              <div className="ad-icon">
                <FontAwesomeIcon icon={['fas', 'bolt']} size="2x"/>
              </div>
              <div className="ad-blub">
                <div className="sing-ad-title">Show about nothing</div>
                <p className="ad-author">Life</p>
                <p className="ad-author grey-ify">May 17 ~ 1 min read</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}

export default NetworkAd;
