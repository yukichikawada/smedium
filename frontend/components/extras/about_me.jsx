import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="container about-me-container">
        <div className="intro-header">
          <h1>Welcome to Smedium, where</h1>
          <h1>you can blog and find out all there is</h1>
          <h1>to know about me, Yukichi.</h1>
        </div>
        <div className="pic-linebreak">
          <div className="about-card-container">
            <h1 className="about-job-title">Software Engineer</h1>
            <p className="about-me-p">Realtor turned Software Engineer here, so you know I know when and how to make things move. Having started programming as a hobby then recognizing a few years later the step from hobbyist to professional was in reach, I jumped headfirst into the most challenging bootcamp around to harden and sharpen my skills over the last year. Possessing a background in Ruby on Rails, JavaScript, Node, React-Redux, Angular, PostgreSQL, and MongoDB, my web development skills will allow me to hit the ground running with your team.</p>
          </div>
          <img src="https://bit.ly/2IzDm0F" className="about-me-profile-pic"/>
        </div>
        <div className="about-more">
          <h1>|</h1>
        </div>
        <div className="about-lower">
          <div className="about-cards-continued">
            <div className="about-card-mini">
              <div className="about-card-container">
                <p className="about-card-p">I have an unquenchable thirst for knowledge and experience, making me an ideal fit for this industry that's known to be in constant flux. As an avid reader and self improvement enthusiast I've adopted a great philosophical appreciation for the intersection of life and programming at the crossroads of Agile Development, XP, pair programming, and TDD. My extensive experience working on, learning from, playing with, and leading teams is something I enjoy and look to pay forward daily.</p>
              </div>
            </div>
            <div className="about-more">
              <h1>|</h1>
            </div>
            <div className="about-card-mini">
              <div className="about-card-container">
                <p className="about-card-p">A recent side project of mine involved sifting through San Francisco Eviction Data for the past 22 years and visualizing it in d3.js to better inform myself on a hot button topic and technology. What I like about being a software developer and coding in general is that it isn’t necessarily the solution to all our problems but it can help us build tools to help save ourselves.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-more">
          <h1>|</h1>
        </div>
        <div className="about-end">
          <div className="about-card-container">
            <h3 className="last-line">Thank you for your time, I look forward to hearing from you.</h3>
            <h4 className="indent-left">Sincerely,</h4>
            <h4 className="indent-left">Yukichi Kawada</h4>
            <p className="email-address">
              <a href="mailto:yukichikawada@gmail.com" className="actual-address">
                yukichikawada@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
