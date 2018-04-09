import React from 'react';
import { connect } from 'react-redux';

import StoryForm from './story_form';
import { fetchStory, updateStory } from '../../actions/stories_action';

const mapStateToProps = (state, ownProps) => {
  const defaultStory = {
    title: '',
    body: '',
    author_id: state.session.currentUser.id
  };
  const story = state.entities.stories[ownProps.match.params.storyId] || defaultStory;
  const formType = 'Update Story';

  return { story, formType };
}

const mapDispatchToProps = dispatch => ({
  fetchStory: id => dispatch(fetchStory(id)),
  action: story => dispatch(updateStory(story))
});

class EditStoryForm extends React.Component {
  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.story.id != nextProps.match.params.storyId) {
      this.props.fetchStory(nextProps.match.params.storyId);
    }
  }

  render() {
    const { action, formType, story } = this.props;
    return(
      <StoryForm
      action={action}
      formType={formType}
      story={story} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryForm)
