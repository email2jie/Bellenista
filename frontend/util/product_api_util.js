const ProductApiUtil = {
  fetchAllProducts: function(success){
    $.ajax({
      url: 'api/products',
      success
    });
  },
  createProduct: function(data, success, error){
    $.ajax({
      url: 'api/products',
      type: 'POST',
      data: {product: data},
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("products/new", errors);
      }
    });
  },
  updateProduct: function(id, data, success){
    $.ajax({
      url: `api/products/${id}`,
      type: 'PATCH',
      data: {product: data},
      success
    });
  
  },
  deleteProduct: function(id, success){
    $.ajax({
      url: `api/products/${id}`,
      type: 'DELETE',
      success
    });
  }

}


module.exports = ProductApiUtil;
