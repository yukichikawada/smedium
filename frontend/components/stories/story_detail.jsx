import React from 'react';
import { Link } from 'react-router-dom';

class StoryDetail extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.storyId !== nextProps.match.params.storyId) {
      this.props.fetchStory(nextProps.match.params.storyId)
    }
  }

  render() {
    const story = this.props.story;

    if (!story) {
      return null;
    }

    let editLink;

    {/* if (currentUser.id === story.author_id) {
      editLink = <Link to={`/stories/${story.id}/edit`}>Edit</Link>;
    } */}

    return(
      <article className="article-container">
        <header className="story-bib">
          <h4 className="story-bib-author">{story.author} {editLink}</h4>
          <h4 className="story-bib-date">{new Date(story.created_at).toDateString().slice(4, 16)} ~ {story.read_time} min read</h4>
        </header>
        <section>
          <h1 className="article-story-title">{story.title}</h1>
          <p className="article-story-body">{story.body}</p>
        </section>
      </article>
    )
  }
}

export default StoryDetail;
