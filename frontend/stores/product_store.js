const Store = require('flux/utils').Store;
const ProductConstants = require('../constants/product_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ProductStore = new Store(AppDispatcher);

let _products = {};
let _filtered = {};

ProductStore.all = function(){
  return Object.assign({}, _filtered);
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
function filter(category){
  _filtered = {}
  let id = 0;
  switch(category){
    case "new-arrivals":
      id = 1;
      break;
    case "tops":
      id = 2;
      break;
    case "bottoms":
      id = 3;
      break;
    case "dresses":
      id = 4;
      break;
    case "skirts":
      id = 5;
      break;
    case "jackets-coats":
      id = 6;
      break;
  }
  Object.keys(_products).forEach(keyy=>{
    _products[keyy].categories.forEach(keyx=>{
      console.log(keyx.id);
      if(keyx.id === id){
        _filtered[_products[keyy].id] = _products[keyy];
      }
    });
  });
  ProductStore.__emitChange();
}

ProductStore.__onDispatch = function(payload){

  switch(payload.actionType){
    case ProductConstants.PRODUCTS_RECEIVED:
      resetAllProducts(payload.products);
      filter(payload.category);
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
