import React from 'react';

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

    return(
      <section className="container">
        <h1>{story.title}</h1>
        <p>{story.body}</p>
      </section>
    )
  }
}

export default StoryDetail;
