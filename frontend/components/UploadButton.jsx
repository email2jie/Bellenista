const React = require('react');
const PropTypes = React.PropTypes;

const UploadButton = React.createClass({
  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        
      if(error === null){
const image = {
image: {name: images[0].original_filename, url: images[0].url, thumb_url: images[0].thumbnail_url}

} 

        this.props.postImage(image);
       }
      
      });
    },

  render() {
    return (<div><button onClick={this.upload}>Upload Image</button></div>)
  }


});

module.exports = UploadButton;
