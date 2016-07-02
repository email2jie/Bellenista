const Store = require('flux/utils').Store;
const CategoryConstants = require('../constants/category_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const CategoryStore = new Store(AppDispatcher);

let _categories = {};

CategoryStore.all = function(){
  return Object.assign({}, _categories);
};

CategoryStore.find = function(id){
  return Object.assign({}, _categories[id]);
};

function resetAllCategories(categories){
  _categories = categories;
  CategoryStore.__emitChange();
}

function resetSingleCategory(category){
  _categories[category.id] = category;
  CategoryStore.__emitChange();
}

function removeSingleCategory(category){
  delete _categories[category.id]
  CategoryStore.__emitChange();
}

CategoryStore.__onDispatch = function(payload){

  switch(payload.actionType){
      case CategoryConstants.CATEGORIES_RECEIVED:
        resetAllCategories(payload.categories)
        break;
      case CategoryConstants.CATEGORY_RECEIVED:
        resetSingleCategory(payload.category);
        break;
      case CategoryConstants.CATEGORY_REMOVED:
        removeSingleCategory(payload.category);
        break;
    }

};

module.exports = CategoryStore;
