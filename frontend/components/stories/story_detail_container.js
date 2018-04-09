import { connect } from 'react-redux';

import StoryDetail from './story_detail';
import { fetchStory } from '../../actions/stories_action';

const mapStateToProps = (state, ownProps) => {
  const story = state.entities.stories[ownProps.match.params.storyId];
  return { story };
};

const mapDispatchToProps = dispatch => ({
  fetchStory: storyId => dispatch(fetchStory(storyId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail);
