const React = require('react');
const PropTypes = React.PropTypes;
const ImageActions = require('../actions/image_actions.js');
const UploadButton = React.createClass({
  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        
      if(error === null){
        const image = {
                      image: {name: images[0].original_filename, 
                      url: images[0].url, 
                      resource_type: images[0].resource_type,
                      upload_type: images[0].type,
                      path: images[0].path,
                      height: images[0].height,
                      width: images[0].width,
                      thumb_url: images[0].thumbnail_url}
        
        } 
        this.props.postImage(image);
        ImageActions.fetchAllImages();
        }
          
      });
    },

  render() {
    return (<div><button onClick={this.upload}>Upload Image</button></div>)
  }


});

module.exports = UploadButton;
