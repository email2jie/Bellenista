const ProductApiUtil = require('../util/product_api_util.js');
const ProductConstants = require('../constants/product_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('../actions/error_actions.js');
const hashHistory = require('react-router').hashHistory;

const ProductActions = {
  createProduct(data){
    ProductApiUtil.createProduct(data, this.receiveProduct, ErrorActions.setErrors);
  },

  fetchAllProducts(category){
    ProductApiUtil.fetchAllProducts(this.receiveAllProducts, category);
  },
  deleteProduct(id){
    ProductApiUtil.deleteProduct(id, this.removeProduct);
  },
  updateProduct(id, data){
    ProductApiUtil.updateProduct(id, data, this.editProduct);
  },
  receiveAllProducts(products, category){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCTS_RECEIVED,
      products: products,
      category: category
    });
  },
  receiveProduct(product){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_RECEIVED,
      product: product
    });
  hashHistory.push(`/products/${product.id}/edit`);
  },

  editProduct(product){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_RECEIVED,
      product: product
    });
  hashHistory.push(`/products/${product.id}`);
  },
  removeProduct(product){
    AppDispatcher.dispatch({
      actionType: ProductConstants.PRODUCT_REMOVED,
      product: product
    });
  }



};

module.exports = ProductActions;
