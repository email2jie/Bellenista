const ProductApiUtil = {
  fetchAllProducts: function(success){
    $.ajax({
      url: 'api/products',
      success
    });
  },
  createProduct: function(product, success){
    $.ajax({
      url: 'api/products',
      type: 'POST',
      data: product,
      success
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
