import React from 'react';
import { connect } from 'react-redux';

import StoriesIndex from './stories_index';
import { fetchStories } from '../../actions/stories_action';

const mapStateToProps = state => ({
  stories: Object.keys(state.entities.stories).map(id => state.entities.stories[id])
});

const mapDispatchToProps = dispatch => ({
  fetchStories: () => dispatch(fetchStories())
});

export default connect(mapStateToProps, mapDispatchToProps)(StoriesIndex);
