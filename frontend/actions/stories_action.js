import * as StoryApiUtil from '../utils/stories_util';

export const RECEIVE_STORY = 'RECEIVE_STORY';
export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const REMOVE_STORY = 'REMOVE_STORY';
export const RECEIVE_STORY_ERRORS = 'RECEIVE_STORY_ERRORS';
export const CLEAR_STORY_ERRORS = 'CLEAR_STORY_ERRORS';

export const receiveStory = story => ({
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
    .then(story => dispatch(receiveStory(story)),
      (err => dispatch(receiveStoryErrors(err.responseJSON))))
);

export const updateStory = story => dispatch => (
  StoryApiUtil.updateStory(story)
    .then(story => dispatch(receiveStory(story)),
      (err => dispatch(receiveStoryErrors(err.responseJSON))))
);

export const deleteStory = storyId => dispatch => (
  StoryApiUtil.deleteStory(storyId)
    .then(story => dispatch(removeStory(storyId)))
);

export const fetchStory = storyId => dispatch => (
  StoryApiUtil.fetchStory(storyId)
    .then(story => dispatch(receiveStory(story)))
);

export const fetchStories = () => dispatch => (
  StoryApiUtil.fetchStories()
    .then(stories => dispatch(receiveStories(stories)))
);

const receiveStoryErrors = errors => ({
  type: RECEIVE_STORY_ERRORS,
  errors
})

export const clearStoryErrors = () => ({ type: CLEAR_STORY_ERRORS });
