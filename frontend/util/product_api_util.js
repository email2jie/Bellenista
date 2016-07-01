const ProductApiUtil = {
  fetchAllProducts: function(success){
    $.ajax({
      url: 'api/products',
      success
    });
  },
  createProduct: function(product, success, error){
    $.ajax({
      url: 'api/products',
      type: 'POST',
      data: product,
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        console.log(errors);
        error("products/new", errors);
      }
    });
  },
  deleteProduct: function(data, success){
    $.ajax({
    

      url: `api/products/${data.product.id}`,
      type: 'DELETE',
      success
    });
  }

}


module.exports = ProductApiUtil;
