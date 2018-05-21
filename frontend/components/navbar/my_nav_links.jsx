import React from 'react';
import { Link } from 'react-router-dom';

class MyNavLinks extends React.Component {

  render() {
    const ALL_LINKS = {
      1: 'TECH',
      2: 'CULTURE',
      3: 'ENTREPRENEURSHIP',
      4: 'SELF',
      5: 'POLITICS',
      6: 'MEDIA',
      7: 'DESIGN',
      8: 'SCIENCE',
      9: 'WORK',
      10: 'POPULAR',
      11: 'MORE'
    }
    const links = Object.keys(ALL_LINKS).map(key => {
      return (
        <li key={key} className="nav-links">
          <Link to="/" className="cat-link">{ALL_LINKS[key]}</Link>
        </li>
      )
    });

    return (
      <div className="nav-links-container">
        <ul className="helper">{links}</ul>
      </div>
    )
  }

}

export default MyNavLinks;
