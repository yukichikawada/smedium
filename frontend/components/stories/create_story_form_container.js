import { connect } from 'react-redux';

import StoryForm from './story_form';
import { createStory } from '../../actions/stories_action';

const mapStateToProps = (state, ownProps) => {
  const story = {
    title: '',
    body: '',
    author_id: state.session.currentUser.id
  };
  const formType = 'Write a Story';

  return { story, formType, currentUser };
};

const mapDispatchToProps = dispatch => ({
  action: story => dispatch(createStory(story)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);
