import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const StoriesIndexItem = ({ story }) => (
  <li className="stories-index-item">
    <Link to={`/stories/${story.id}`} className="story-item-link">
      <div className="link-content">
        <div className="upper-bib">
          <p className="story-item-title">{story.title}</p>
          <div className="story-item-snippet">
            <p>
              {ReactHtmlParser(story.body.slice(0,130))}...
            </p>
          </div>
        </div>
        <div className="lower-bib">
          <p className="story-item-author">{story.author}</p>
          <p className="story-item-stats">{new Date(story.created_at).toDateString().slice(4, 10)} ~ {story.read_time} min read</p>
        </div>
      </div>
    </Link>
    <div className="image-container" style={{backgroundImage: `url(${story.image_url})`}}>
    </div>
  </li>
);

export default StoriesIndexItem;
