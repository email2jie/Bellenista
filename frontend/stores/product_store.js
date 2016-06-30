const Store = require('flux/utils').Store;
const ProductConstants = require('../constants/product_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ProductStore = new Store(AppDispatcher);

let _products = {};

window.ProductStore = ProductStore;

ProductStore.all = function(){
  return Object.assign({}, _products);
};

ProductStore.find = function(id){
  return Object.assign({}, _products[id]);
};

function resetAllProducts(products){
  _products = products;
  ProductStore.__emitChange();
}

function resetSingleProduct(product){
  _products[product.id] = product;
  ProductStore.__emitChange();
}

function removeSingleProduct(product){
  delete _products[product.id]
  ProductStore.__emitChange();
}

ProductStore.__onDispatch = function(payload){

  switch(payload.actionType){
    case ProductConstants.PRODUCTS_RECEIVED:
      resetAllProducts(payload.products)
      break;
    case ProductConstants.PRODUCT_RECEIVED:
      resetSingleProduct(payload.product);
      break;
    case ProductConstants.PRODUCT_REMOVED:
      removeSingleProduct(payload.product);
      break;
  }

};

module.exports = ProductStore;
