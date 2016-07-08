const CartItemApiUtil = {
  fetchAllCartItems: function(success){
    $.ajax({
      url: 'api/cart_items',
      success
    });
  },
  createCartItem: function(data, success, error){
    $.ajax({
      url: 'api/cart_items',
      type: 'POST',
      data: {cart_item: data},
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("cart_items/new", errors);
      } 
    });
  },
  updateCartItem: function(id, data, success){
    $.ajax({
      url: `api/cart_items/${id}`,
      type: 'PATCH',
      data: {cart_item: data},
      success
    });
  },
  deleteCartItem: function(id, success){
    $.ajax({
      url: `api/cart_items/${id}`,
      type: 'DELETE',
      success
    });
  }

}
module.exports = CartItemApiUtil;
