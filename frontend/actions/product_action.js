const ProductApiUtil = require('../util/product_api_util.js');
const ProductConstants = require('../constants/product_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('../actions/error_actions.js');
const hashHistory = require('react-router').hashHistory;

const ProductActions = {
  createProduct(data){
    ProductApiUtil.createProduct(data, this.receiveProduct, ErrorActions.setErrors);
  },

  fetchAllProducts(){
    ProductApiUtil.fetchAllProducts(this.receiveAllProducts);
  },
  deleteProduct(id){
    ProductApiUtil.deleteProduct(id, this.removeProduct);
  },
  updateProduct(id, data){
    ProductApiUtil.updateProduct(id, data, this.updateProduct);
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
  hashHistory.push(`/products/${product.id}/edit`);
  },

  updateProduct(product){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_RECEIVED,
      product: product
    });
  hashHistory.push(`/products`);
  },
  removeProduct(product){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_REMOVED,
      product: product
    });
  }



};

module.exports = ProductActions;
