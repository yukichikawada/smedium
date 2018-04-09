import React from 'react';
import { Link } from 'react-router-dom';

const StoriesIndexItem = ({ story }) => (
  <li>
    <Link to={`/stories/${story.id}`}>
      <h4>{story.title}</h4>
      <h5>{story.author}</h5>

      <p>{new Date(story.created_at).toDateString().slice(4, 10)} ~ {story.read_time} min read</p>
    </Link>
  </li>
);

export default StoriesIndexItem;
