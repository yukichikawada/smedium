import React from 'react';

const About = () => (
  <div>
    <h1>A medium clone</h1>
    <h3>Frontend Routes</h3>
    <ul>
      <li>"#/about"</li>
      <li>"#/:username"</li>
      <li>"#/newStory"</li>
      <li>"#/:username/:storyId"</li>
      <li>"#/:username/:storyId/edit"</li>
      <li>"#/:username/followers"</li>
      <li>"#/:username/following"</li>
    </ul>
  </div>
);

export default About;
