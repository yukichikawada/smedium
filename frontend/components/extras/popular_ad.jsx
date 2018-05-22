import React from 'react';
import { Link } from 'react-router-dom';

import MyFooter from './my_footer'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class PoplarAd extends React.Component {
  render() {
    return (
      <aside className="popular-ad">
        <header className="popular-header">
          <h5>Popular on Smedium</h5>
        </header>
        <hr className="min-line-height"></hr>
        <div className="">
          <div className="ad-content">
            <div className="single-ad">
              <div className="">
                <h5 className="grey-ify">01</h5>
              </div>
              <div className="popular-blurb">
                <div className="sing-ad-title">Catching Fire</div>
                <p className="ad-author">The Nib</p>
                <p className="ad-author grey-ify">a few minutes ago ~ 1 min read</p>
              </div>
            </div>
            <div className="single-ad">
              <div className="">
                <h5 className="grey-ify">02</h5>
              </div>
              <div className="popular-blurb">
                <div className="sing-ad-title">How to do everything</div>
                <p className="ad-author">Journey</p>
                <p className="ad-author grey-ify">May 21 ~ 3 min read</p>
              </div>
            </div>
            <div className="single-ad">
              <div className="">
                <h5 className="grey-ify">03</h5>
              </div>
              <div className="popular-blurb">
                <div className="sing-ad-title">The meaning of life</div>
                <p className="ad-author">Calvin and Hobbes</p>
                <p className="ad-author grey-ify">May 20 ~ 2 min read</p>
              </div>
            </div>
            <div className="single-ad">
              <div className="">
                <h5 className="grey-ify">04</h5>
              </div>
              <div className="popular-blurb">
                <div className="sing-ad-title">Show about nothing</div>
                <p className="ad-author">Life</p>
                <p className="ad-author grey-ify">May 17 ~ 1 min read</p>
              </div>
            </div>
            <hr></hr>
            <MyFooter></MyFooter>
          </div>
        </div>
      </aside>
    )
  }
}

export default PoplarAd;
