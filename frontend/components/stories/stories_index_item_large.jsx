import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const StoriesIndexItemLarge = ({ story }) => (
  <article className="large-story">
    <Link to={`/stories/${story.id}`} className="story-item-link">
      <div className="large-image"
        style={{backgroundImage: `url(${story.image_url})`}}>
      </div>
    </Link>
  </article>
)

export default StoriesIndexItemLarge;
