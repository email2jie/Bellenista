const React = require('react');
const PropTypes = React.PropTypes;

const UploadButton = React.createClass({
  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        
      if(error === null){
        this.props.postImage(image[0].url);
       }
      
      });
    },

  render() {
    return (<div><button onClick={this.upload}>Upload Image</button></div>)
  }


});

module.exports = UploadButton;
