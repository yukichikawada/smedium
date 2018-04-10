import { connect } from 'react-redux';

import StoryForm from './story_form';
import { createStory, clearStoryErrors } from '../../actions/stories_action';

const mapStateToProps = (state, ownProps) => {
  const story = {
    title: '',
    body: '',
    author_id: state.session.currentUser.id
  };
  const formType = 'Draft';
  const errors = state.errors;

  return { story, formType, errors };
};

const mapDispatchToProps = dispatch => ({
  action: story => dispatch(createStory(story)),
  clearStoryErrors: () => dispatch(clearStoryErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);
