const imageApiUtil = require('../util/image_api_util.js');
const ImageConstants = require('../constants/image_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('../actions/error_actions.js');
const hashHistory = require('react-router').hashHistory;

const ImageActions = {
  createImage(image){
    imageApiUtil.createImage(image, this.receiveImage, ErrorActions.setErrors);
  },

  fetchAllImages(){
    imageApiUtil.fetchAllImages(this.receiveAllImages);
  },
  deleteImage(image){
    imageApiUtil.deleteImage(image, this.removeImage);
  },

  receiveAllImages(images){
    AppDispatcher.dispatch({
      actionType: ImageConstants.IMAGES_RECEIVED,
      images: images
    });
  },
  receiveImage(image){
    AppDispatcher.dispatch({
      actionType: ImageConstants.IMAGE_RECEIVED,
      image: image
    });
  hashHistory.push("/images");
  },
  removeImage(image){
    AppDispatcher.dispatch({
      actionType: ImageConstants.IMAGE_REMOVED,
      image: image
    });
  }



};

module.exports = ImageActions;
