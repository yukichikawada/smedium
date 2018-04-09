import React from 'react';
import { Link } from 'react-router-dom';

import CreateStoryContainer from './create_story_form_container';

class StoriesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const stories = this.props.stories.map(story => {
      return (
        <li key={story.id}>
          <h4>
            {story.title} - {story.author} ~ {story.read_time} min read
          </h4>
          <p>
            {story.body}
          </p>
        </li>
      );
    });

    return (
      <div>
        <ul>
          {stories}
        </ul>
        <Link to='/newStory'>Write a new story</Link>
      </div>
    );
  }
}

export default StoriesIndex;
