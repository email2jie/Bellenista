const Store = require('flux/utils').Store;
const ReviewConstants = require('../constants/review_constants.js'); 
const AppDispatcher = require('../dispatcher/dispatcher.js'); 
const ReviewStore = new Store(AppDispatcher); 


let _reviews = {}; 
let _filtered = {};
ReviewStore.all = function(){ 
  return Object.assign({}, _reviews);
};

ReviewStore.filtered = function(){
  return Object.assign({}, _reviews);

};
ReviewStore.find = function(id){
  return Object.assign({}, _reviews[id]);
};
function resetAllReviews(reviews){
  _reviews = reviews;
  ReviewStore.__emitChange();
}

function resetSingleReview(review){
  _reviews[review.id] = review;
  ReviewStore.__emitChange();
}

function removeSingleReview(review){
  delete _reviews[review.id]
  ReviewStore.__emitChange();
}
function filter(id){

  Object.keys(_reviews).forEach(key=>{
    if(_reviews[key].product_id === id){
      _filtered[_reviews[key].id] = _reviews[key];
    }
  });
  ReviewStore.__emitChange();
}

ReviewStore.__onDispatch = function(payload){

  switch(payload.actionType){
      case ReviewConstants.REVIEWS_RECEIVED:
        resetAllReviews(payload.reviews);
        filter(payload.filter);
        break;
      case ReviewConstants.REVIEW_RECEIVED:
        resetSingleReview(payload.review);
        filter(payload.filter);
        break;
      case ReviewConstants.REVIEW_REMOVED: 
        removeSingleReview(payload.review);
        filter(payload.filter);
        break;
    }

};

module.exports = ReviewStore;
