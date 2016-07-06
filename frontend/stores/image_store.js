const Store = require('flux/utils').Store;
const ImageConstants = require('../constants/image_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ImageStore = new Store(AppDispatcher);

let _images = {};

ImageStore.all = function(){
  return Object.assign({}, _images);
};

ImageStore.find = function(id){
  return Object.assign({}, _images[id]);
};

function resetAllImages(images){
  _images = images;
  ImageStore.__emitChange();
}

function resetSingleImage(image){
  _images[image.id] = image;
  ImageStore.__emitChange();
}

function removeSingleImage(image){
  delete _images[image.id]
  ImageStore.__emitChange();
}

ImageStore.__onDispatch = function(payload){

  switch(payload.actionType){
      case ImageConstants.IMAGES_RECEIVED:
        resetAllImages(payload.images)
        break;
      case ImageConstants.IMAGE_RECEIVED:
        resetSingleImage(payload.image);
        break;
      case ImageConstants.IMAGE_REMOVED:
        removeSingleImage(payload.image);
        break;
    }

};

module.exports = ImageStore;
