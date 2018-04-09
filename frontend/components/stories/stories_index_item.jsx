import React from 'react';
import { Link } from 'react-router-dom';

const StoriesIndexItem = ({ story }) => (
  <li className="stories-index-item">
    <Link to={`/stories/${story.id}`} className="story-item-link">
      <p className="story-item-title"><strong>{story.title}</strong></p>
      <h5 className="story-item-author">{story.author}</h5>

      <p className="story-item-stats">{new Date(story.created_at).toDateString().slice(4, 10)} ~ {story.read_time} min read</p>
    </Link>
  </li>
);

export default StoriesIndexItem;
