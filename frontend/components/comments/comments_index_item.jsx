import React from 'react';

const CommentsIndexItem = ({ author, created_at, body }) => (
  <li className="comment-card">
    <div className="comment-header">
      <img className="comment-card-profile-pic" src="https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523555382/yuk7copy.png" />
      <div className="comment-card-bib">
        <h5 className="comment-author">{author}</h5>
        <h5 className="comment-date">{new Date(created_at).toDateString().slice(4, 10)}</h5>
      </div>
    </div>
    <div className="comment-content">
      <p>
        {body}
      </p>
    </div>
  </li>
);

export default CommentsIndexItem;
