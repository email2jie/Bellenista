const Store = require('flux/utils').Store;
const CartItemConstants = require('../constants/cart_item_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const CartItemStore = new Store(AppDispatcher);

let _cartItems = {};

CartItemStore.all = function(){
  return Object.assign({}, _cartItems);
};

CartItemStore.find = function(id){
  return Object.assign({}, _cartItems[id]);
};
function resetAllCartItems(cartItems){
  _cartItems = cartItems;
  CartItemStore.__emitChange();
}

function resetSingleCartItem(cartItem){
  _cartItems[cartItem.id] = cartItem;
  CartItemStore.__emitChange();
}

function removeSingleCartItem(cartItem){
  delete _cartItems[cartItem.id]
  CartItemStore.__emitChange();
}

CartItemStore.__onDispatch = function(payload){

  switch(payload.actionType){
      case CartItemConstants.CARTITEMS_RECEIVED:
        resetAllCartItems(payload.cartItems)
        break;
      case CartItemConstants.CARTITEM_RECEIVED:
        resetSingleCartItem(payload.cartItem);
        break;
      case CartItemConstants.CARTITEM_REMOVED:
        removeSingleCartItem(payload.cartItem);
        break;
    }

};

module.exports = CartItemStore;
