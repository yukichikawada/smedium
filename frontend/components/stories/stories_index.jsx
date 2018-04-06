import React from 'react';

class StoriesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const stories = this.props.stories.map(story => {
      return (
        <li key={story.id}>{story.title}</li>
      );
    });

    return (
      <div>
        <ul>
          {stories}
        </ul>
      </div>
    );
  }
}

export default StoriesIndex;
