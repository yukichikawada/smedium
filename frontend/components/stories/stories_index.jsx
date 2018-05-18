import React from 'react';

import CreateStoryContainer from './create_story_form_container';
import StoriesIndexItem from './stories_index_item';

import { Button } from 'reactstrap';

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
        <Button outline color="primary">Submit</Button>
        <ul className="container-index-item">
          {stories}
        </ul>
      </div>
    );
  }
}

export default StoriesIndex;
