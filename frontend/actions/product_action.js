const ProductApiUtil = require('../util/product_api_util.js');
const ProductConstants = require('../constants/product_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const ProductActions = {
  createProduct(product){
    ProductApiUtil.createProduct(product, this.receiveProduct);
  },

  deleteProduct(product){
    ProductApiUtil.deleteProduct(product, this.removeProduct);
  },

  receiveProduct(product){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_RECEIVED,
      product: product
    });
  },

  removeProduct(product){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_REMOVED,
      product: product
    });
  }



};

module.exports = ProductActions;
