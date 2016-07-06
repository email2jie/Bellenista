const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store.js');
const ImageStore = require('../stores/image_store.js');
const ImageActions = require('../actions/image_actions.js');
const ImageIndex = require('./imageIndex');
const UploadButton = require('./UploadButton.jsx');


const Image = React.createClass({
  getInitialState() {
    return {images: ImageStore.all()};
  },
  
  _imagesChanged(){
    this.setState({images: ImageStore.all()});
  },
  
  componentDidMount(){
    this.imageListener = ImageStore.addListener(this._imagesChanged);
    ImageActions.fetchAllImages();
  },
  componentWillUnmount(){
    this.imageListener.remove();
  },


  render(){
    return(<Image-Content>
      <UploadButton postImage={ImageActions.createImage} />
      
      <ul>
        <ImageIndex images={this.state.images} />
      </ul>

    </Image-Content>);
  }

});

module.exports = Image;
