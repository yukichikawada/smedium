import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-119868044-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const CLOUDINARY_UPLOAD_PRESET = 'hylawjlm';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dh5e4xxbr/upload';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.story;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleChange(value) {
    this.setState({body: value});
  }

  componentWillUnmount() {
    this.props.clearStoryErrors();
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    let that = this;
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);
    upload.end((err, response) => {
      if (response.body.secure_url !== '') {
        that.setState({
          image_url: response.body.secure_url
        });
      }
    });

  }

  render() {
    let dropzoneRef;
    let that = this;
    return (
      <div className="container">
        <p className="partner-program"></p>
        <div className="content">
          <ul>{this.errors()}</ul>
          <h3>{this.props.formType}</h3>
          <form onSubmit={this.handleSubmit} className="story-form">


            <input
              type="text"
              value={this.state.title}
              placeholder="Title"
              className="story-form-content story-form-title"
              onChange={this.update('title')} />


            <ReactQuill
              value={this.state.body}
              className="story-form-content story-form-body"
              placeholder="Tell your story..."
              onChange={this.handleChange} />

            <div className="submit-position story-form-content">
              <div className="submit-left">
                <div>
                  <Dropzone
                    ref={(node) => { dropzoneRef = node; }}
                    onDrop={(accepted, rejected) => { alert(accepted) }}
                    className="drop-hidden"
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                    <p>Upload Headline Image</p>
                  </Dropzone>
                </div>
              </div>
              <div className="submit-right">
                <input
                  type="submit"
                  value="Publish"
                  className="story-form-submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(StoryForm);
