import * as StoryApiUtil from '../utils/stories_util';

export const RECEIVE_STORY = 'RECEIVE_STORY';
export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const REMOVE_STORY = 'REMOVE_STORY';

const receiveStory = story => ({
    type: RECEIVE_STORY,
    story
});

const receiveStories = stories => ({
  type: RECEIVE_STORIES,
  stories
});

const removeStory = storyId => ({
  type: REMOVE_STORY,
  storyId
});

export const createStory = story => dispatch => (
  StoryApiUtil.postStory(story)
    .then(story => dispatch(receiveStory(story)))
);

export const updateStory = story => dispatch => (
  StoryApiUtil.updateStory(story)
    .then(story => dispatch(receiveStory(story)))
);

export const deleteStory = storyId => dispatch => (
  StoryApiUtil.deleteStory(storyId)
    .then(story => dispatch(removeStory(storyId)))
);

export const fetchStory = storyId => dispatch => (
  StoryApiUtil.fetchStory(storyId)
    .then(story => dispatch(receiveStory(storyId)))
);

export const fetchStories = () => dispatch => (
  StoryApiUtil.fetchStories()
    .then(stories => dispatch(receiveStories(stories)))
);
