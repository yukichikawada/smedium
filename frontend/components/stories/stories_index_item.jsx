import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const StoriesIndexItem = ({ story }) => {
  const uploadedPic = story.image_url ? (
    <div className="image-container"
      style={{backgroundImage: `url(${story.image_url})`}} >
    </div>
  ) : (
    <div className="image-container"
      style={{backgroundImage: `url(https://res.cloudinary.com/dh5e4xxbr/image/upload/v1524181599/hev8wfmhyshxody0bniq.jpg})`}} >
    </div>
  )

  return (
    <li className="stories-index-item">
      <Link to={`/stories/${story.id}`} className="story-item-link">
        <div className="link-content">
          <div className="upper-bib">
            <p className="story-item-title">{story.title}</p>
            <div className="story-item-snippet">
              {ReactHtmlParser(story.body.slice(0,130))}...
            </div>
          </div>
          <div className="lower-bib">
            <span>
              <p className="story-item-author">{story.author}</p>
              <p className="story-item-stats">
                {
                  new Date(story.created_at)
                  .toDateString().slice(4, 10)
                } ~ {story.read_time} min read
              </p>
            </span>
            <FontAwesomeIcon icon={['far', 'bookmark']} className="greyed-out"/>
          </div>
        </div>
      </Link>
      {uploadedPic}
    </li>
  );

}

export default StoriesIndexItem;
