const CartItemApiUtil = require('../util/cart_item_api_util.js');
const CartItemConstants = require('../constants/cart_item_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('../actions/error_actions.js');
const hashHistory = require('react-router').hashHistory;

const CartItemActions = {
  createCartItem(data){
    CartItemApiUtil.createCartItem(data, this.receiveCartItem, ErrorActions.setErrors);
  },

  fetchAllCartItems(){
    CartItemApiUtil.fetchAllCartItems(this.receiveAllCartItems);
  },
  deleteCartItem(id){
    CartItemApiUtil.deleteCartItem(id, this.removeCartItem);
  },
  updateCartItem(id, data){
    CartItemApiUtil.updateCartItem(id, data, this.editCartItem);
  },
  receiveAllCartItems(cartItems){
    AppDispatcher.dispatch({
      actionType: CartItemConstants.CARTITEMS_RECEIVED,
      cartItems: cartItems
    });
  },
  receiveCartItem(cartItem){
    AppDispatcher.dispatch({
      actionType: CartItemConstants.CARTITEM_RECEIVED,
      cartItem: cartItem
    });
  },

  editCartItem(cartItem){
    AppDispatcher.dispatch({
      actionType: CartItemConstants.CARTITEM_RECEIVED,
      cartItem: cartItem
    });
  },
  removeCartItem(cartItem){
    AppDispatcher.dispatch({
      actionType: CartItemConstants.CARTITEM_REMOVED,
      cartItem: cartItem
    });
  }



};

module.exports = CartItemActions;
