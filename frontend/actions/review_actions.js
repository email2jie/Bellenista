const ReviewApiUtil = require('../util/review_api_util.js');
const ReviewConstants = require('../constants/review_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('../actions/error_actions.js');
const hashHistory = require('react-router').hashHistory;

const ReviewActions = {
  createReview(data, callback){
    ReviewApiUtil.createReview(data, this.receiveReview, ErrorActions.setErrors, callback);
  },

  fetchAllReviews(filter){
    ReviewApiUtil.fetchAllReviews(this.receiveAllReviews, filter);
  },
  deleteReview(id){
    ReviewApiUtil.deleteReview(id, this.removeReview);
  },
  updateReview(id, data){
    ReviewApiUtil.updateReview(id, data, this.editReview);
  },
  receiveAllReviews(reviews, filter){
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REVIEWS_RECEIVED,
      reviews: reviews,
      filter: filter
    });
  },
  receiveReview(review){
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REVIEW_RECEIVED,
      review: review
    });
  },

  editReview(review){
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REVIEW_RECEIVED,
      review: review
    });
  },
  removeReview(review){
    AppDispatcher.dispatch({
      actionType: ReviewConstants.REVIEW_REMOVED,
      review: review
    });
  }



};

module.exports = ReviewActions;
