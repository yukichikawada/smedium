import React from 'react';
import { connect } from 'react-redux';

import StoryForm from './story_form';
import { fetchStory, updateStory, clearStoryErrors } from '../../actions/stories_action';

const mapStateToProps = (state, ownProps) => {
  const defaultStory = {
    title: '',
    body: '',
    author_id: state.session.currentUser.id
  };
  const story = state.entities.stories[ownProps.match.params.storyId] || defaultStory;
  const formType = 'Update Story';
  const errors = state.errors;

  return { story, formType, errors };
}

const mapDispatchToProps = dispatch => ({
  fetchStory: id => dispatch(fetchStory(id)),
  action: story => dispatch(updateStory(story)),
  clearStoryErrors: () => dispatch(clearStoryErrors())
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
    const { action, formType, story, errors, clearStoryErrors } = this.props;
    return(
      <StoryForm
      action={action}
      formType={formType}
      story={story}
      clearStoryErrors={clearStoryErrors}
      errors={errors} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryForm)
