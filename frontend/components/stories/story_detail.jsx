import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';import ReactGA from 'react-ga';

ReactGA.initialize('UA-119868044-1');
ReactGA.pageview(window.location.pathname + window.location.search);

import CommentsIndexItem from '../comments/comments_index_item';
import CommentFormContainer from '../comments/comment_form_container';
import { SemiProtectedRoute } from '../../utils/route_util';

class StoryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.editLink = this.editLink.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.storyId !== nextProps.match.params.storyId) {
      this.props.fetchStory(nextProps.match.params.storyId)
    }
  }

  deleteHandler(e) {
    e.preventDefault();
    this.props.deleteStory(this.props.story.id)
      .then(() => this.props.history.push('/'));
  }

  editLink() {
    const { currentUser, story } = this.props;

    if (currentUser && currentUser.id === story.author_id) {
      return (
        <div className="button-group">
          <div>
            <Link
              to={`/stories/${story.id}/edit`}
              className="edit-button">
              Edit
            </Link>
          </div>
          <div
            onClick={this.deleteHandler}
            className="delete-button">
            Delete
          </div>
        </div>
        );
      }
  }

  comments() {
    if (this.props.story.comments) {
      return (
        Object.keys(this.props.story.comments).reverse().map(id => {
          return (
            <CommentsIndexItem key={id}
              comment={this.props.story.comments[id]} />
          )
        })
      )
    }
  }

  render() {
    const {story} = this.props;

    if (!story) {
      return null;
    }

    const uploadedPic = story.image_url ? (
      <div className="story-detail-image"
        style={{backgroundImage: `url(${story.image_url})`}} >
      </div>
    ) : (
      <div className="story-detail-image"
        style={{backgroundImage: `url(https://res.cloudinary.com/dh5e4xxbr/image/upload/v1524181599/hev8wfmhyshxody0bniq.jpg)`}} >
      </div>
    )

    const commentsPrompt = this.props.currentUser ? (
      <div>
        <SemiProtectedRoute component={CommentFormContainer} path={`/stories/${story.id}`} storyId={story.id} />
        <ul>
          {this.comments()}
        </ul>
      </div>
    ) : (
      <div className="registration-container">
        <div className="registration-content">
          <h4 className="registration-prompt">
            <Link to="/login" className="blue-signin">Sign in</Link> or <Link to="/signup">Sign up</Link> to have access to comments!
          </h4>
        </div>
      </div>
    )

    return(
      <article className="article-container">
        <header className="story-bib">
          <div className="comment-header">
            <img className="comment-card-profile-pic" style={{backgroundImage: `url(https://res.cloudinary.com/dh5e4xxbr/image/upload/v1523555382/yuk7copy.png)`}} />
            <div className="comment-card-bib">
              <h5 className="comment-author">{story.author}</h5>
              <h5 className="comment-date">{new Date(story.created_at).toDateString()}</h5>
            </div>
          </div>
          <div className="story-right">
             {this.editLink()}
          </div>
        </header>
        <section>
          <h1 className="article-story-title">{story.title}</h1>
          {uploadedPic}
          <hr></hr>
          <div className="article-story-body">{ReactHtmlParser(story.body)}</div>
        </section>
        <hr></hr>
        <section className="article-comments-container">
          {commentsPrompt}
        </section>
      </article>
    )
  }
}

export default StoryDetail;
