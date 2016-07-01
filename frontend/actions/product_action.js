const ProductApiUtil = require('../util/product_api_util.js');
const ProductConstants = require('../constants/product_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('../actions/error_actions.js');
const hashHistory = require('react-router').hashHistory;

const ProductActions = {
  createProduct(product){
    ProductApiUtil.createProduct(product, this.receiveProduct, ErrorActions.setErrors);
  },

  fetchAllProducts(){
    ProductApiUtil.fetchAllProducts(this.receiveAllProducts);
  },
  deleteProduct(product){
    ProductApiUtil.deleteProduct(product, this.removeProduct);
  },

  receiveAllProducts(products){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCTS_RECEIVED,
      products: products
    });
  },
  receiveProduct(product){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_RECEIVED,
      product: product
    });
  hashHistory.push("/products");
  },

  removeProduct(product){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_REMOVED,
      product: product
    });
  }



};

module.exports = ProductActions;
