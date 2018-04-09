import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import NavbarContainer from './navbar/navbar_container';
import StoriesIndexContainer from './stories/stories_index_container';
import CreateStoryContainer from './stories/create_story_form_container';
import StoryDetailContainer from './stories/story_detail_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const Index = () => (
  <div>
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/" component={NavbarContainer} />
    <Switch>
      <ProtectedRoute path="/newStory" component={CreateStoryContainer} />
      <Route path="/stories/:storyId" component={StoryDetailContainer} />
      <Route exact path="/" component={StoriesIndexContainer} />
    </Switch>
  </div>
);

export default Index;
