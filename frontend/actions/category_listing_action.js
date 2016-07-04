const CategoryListingApiUtil = require('../util/category_listing_api_util.js');
const CategoryListingConstants = require('../constants/category_listing_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('../actions/error_actions.js');
const hashHistory = require('react-router').hashHistory;

const CategoryListingActions = {
  createCategoryListing(categoryListing){
      CategoryListingApiUtil.createCategoryListing(categoryListing, this.receiveCategoryListing, ErrorActions.setErrors);
    },

  fetchAllCategoryListings(){
      CategoryListingApiUtil.fetchAllCategoryListings(this.receiveAllCategoryListings);
    },
  deleteCategoryListing(categoryListing){
      CategoryListingApiUtil.deleteCategoryListing(categoryListing, this.removeCategoryListing);
    },

  receiveAllCategoryListings(categoryListings){
      AppDispatcher.dispatch({
            actionType: CategoryListingConstants.CATEGORY_LISTINGS_RECEIVED,
            categoryListings: categoryListings
          });
    },
  receiveCategoryListing(categoryListing){
      AppDispatcher.dispatch({
            actionType: CategoryListingConstants.CATEGORY_LISTING_RECEIVED,
            categoryListing: categoryListing
          });
    },

  removeCategoryListing(categoryListing){
      AppDispatcher.dispatch({
            actionType: CategoryListingConstants.CATEGORY_LISTING_REMOVED,
            categoryListing: categoryListing
          });
    }



};

module.exports = CategoryListingActions;
