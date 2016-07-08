const ProductApiUtil = {
  fetchAllProducts: function(success, category){
    $.ajax({
      url: 'api/products',
      success(resp){
        success(resp, category);
      }
          
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
