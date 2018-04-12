import { connect } from 'react-redux';

import StoryDetail from './story_detail';
import { fetchStory, deleteStory } from '../../actions/stories_action';

const mapStateToProps = (state, ownProps) => {
  const story = state.entities.stories[ownProps.match.params.storyId];
  const comments = state.entities.comments;

  return {
    story,
    comments,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStory: storyId => dispatch(fetchStory(storyId)),
  deleteStory: storyId => dispatch(deleteStory(storyId)),
  fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail);
