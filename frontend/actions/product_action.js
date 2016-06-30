const ProductApiUtil = require('../util/product_api_util.js');
const ProductConstants = require('../constants/product_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const ProductActions = {
  createProduct(product){
    ProductApiUtil.createProduct(product, this.receiveProduct);
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
  },

  removeProduct(product){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_REMOVED,
      product: product
    });
  }



};

module.exports = ProductActions;
