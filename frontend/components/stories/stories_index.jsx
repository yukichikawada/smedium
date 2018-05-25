import React from 'react';
import Sticky from 'react-stickynode';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-119868044-1');
ReactGA.pageview(window.location.pathname + window.location.search);

import CreateStoryContainer from './create_story_form_container';
import StoriesIndexItem from './stories_index_item';
import NetworkAd from '../extras/network_ad';
import PopularAd from '../extras/popular_ad';

class StoriesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const stories = this.props.stories.map(story => {
      return (
        <StoriesIndexItem key={story.id} story={story} className="smaller"/>
      );
    });

    return (
      <div className="stories-index">
        <ul className="container-index-item">
          {stories}
        </ul>
        <div>
          <NetworkAd></NetworkAd>
          <Sticky enabled={true} top={50}>
            <PopularAd></PopularAd>
          </Sticky>
        </div>
      </div>
    );
  }
}

export default StoriesIndex;
