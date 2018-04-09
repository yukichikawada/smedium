import React from 'react';
import { Link } from 'react-router-dom';

import CreateStoryContainer from './create_story_form_container';
import StoriesIndexItem from './stories_index_item';

class StoriesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const stories = this.props.stories.map(story => {
      return (
        <StoriesIndexItem key={story.id} story={story} className="stories-index-item"/>
      );
    });

    return (
      <div className="container">
        <ul className="">
          {stories}
        </ul>
        <Link to='/newStory'>Write a new story</Link>
      </div>
    );
  }
}

export default StoriesIndex;
