import React from 'react';

import { Link } from 'react-router-dom';

class MyFooter extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <ul className="footer-content">
          <li className="grey-ify footer-li">
            <Link to="/about" className="footer-link">
              Help
            </Link>
          </li>
          <li className="grey-ify footer-li">
            <Link to="/about" className="footer-link">
              Status
            </Link>
          </li>
          <li className="grey-ify footer-li">
            <Link to="/about" className="footer-link">
              Writers
            </Link>
          </li>
          <li className="grey-ify footer-li">
            <Link to="/about" className="footer-link">
              Blog
            </Link>
          </li>
          <li className="grey-ify footer-li">
            <Link to="/about" className="footer-link">
              Careers
            </Link>
          </li>
          <li className="grey-ify footer-li">
            <Link to="/about" className="footer-link">
              Privacy
            </Link>
          </li>
          <li className="grey-ify footer-li">
            <Link to="/about" className="footer-link">
              Terms
            </Link>
          </li>
          <li className="grey-ify footer-li">
            <Link to="/about" className="footer-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MyFooter;
