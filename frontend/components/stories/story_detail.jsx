import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

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

  render() {
    const story = this.props.story;

    if (!story) {
      return null;
    }

    return(
      <article className="article-container">
        <header className="story-bib">
          <div className="story-left">
            <h4 className="story-bib-author">{story.author}</h4>
            <h4 className="story-bib-date">{new Date(story.created_at).toDateString().slice(4, 16)} ~ {story.read_time} min read</h4>
          </div>
          <div className="story-right">
             {this.editLink()}
          </div>
        </header>
        <section>
          <h1 className="article-story-title">{story.title}</h1>
          <div className="article-story-body">{ReactHtmlParser(story.body)}</div>
        </section>
      </article>
    )
  }
}

export default StoryDetail;
