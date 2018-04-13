import React from 'react';

import ReactHtmlParser from 'react-html-parser';

const CommentsIndexItem = ({ comment }) => (
  <li className="comment-card">
    <div className="comment-header">
      <img className="comment-card-profile-pic" style={{backgroundImage: `url(https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523555382/yuk7copy.png)`}} />
      <div className="comment-card-bib">
        <h5 className="comment-author">{comment.author}</h5>
        <h5 className="comment-date">{new Date(comment.created_at).toDateString()}</h5>
      </div>
    </div>
    <div className="comment-content">
      <p>
        {ReactHtmlParser(comment.body)}
      </p>
    </div>
  </li>
);

export default CommentsIndexItem;
