const CategoryApiUtil = require('../util/category_api_util.js');
const CategoryConstants = require('../constants/category_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('../actions/error_actions.js');
const hashHistory = require('react-router').hashHistory;

const CategoryActions = {
  createCategory(category, resetInput){
    CategoryApiUtil.createCategory(category, this.receiveCategory, ErrorActions.setErrors, resetInput);
  },

  fetchAllCategories(){
    CategoryApiUtil.fetchAllCategories(this.receiveAllCategories);
  },
  deleteCategory(category){
    CategoryApiUtil.deleteCategory(category, this.removeCategory);
  },

  receiveAllCategories(categories){
    AppDispatcher.dispatch({
      actionType: CategoryConstants.CATEGORIES_RECEIVED,
      categories: categories
    });
  },
  receiveCategory(category){
    AppDispatcher.dispatch({
      actionType: CategoryConstants.CATEGORY_RECEIVED,
      category: category
    });
  },

  removeCategory(category){
    AppDispatcher.dispatch({
      actionType: CategoryConstants.CATEGORY_REMOVED,
      category: category
    });
  }



};

module.exports = CategoryActions;
