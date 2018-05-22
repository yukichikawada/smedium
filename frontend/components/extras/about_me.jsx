import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="intro-header">
          <h1>Welcome to Smedium, where</h1>
          <h1>you can blog and find out all there is</h1>
          <h1>to know about me, Yukichi.</h1>
        </div>
        <div className="pic-linebreak">
          <div>
            <h1 className="about-job-title">Software Engineer</h1>
            <p>Resume</p>
            <p>Github</p>
            <p>Angel.co</p>
          </div>
          <img src="https://bit.ly/2IzDm0F" className="about-me-profile-pic"/>
        </div>
      </div>
    );
  }
}

export default AboutMe;
