const CategoryApiUtil = {
  fetchAllCategories: function(success){
    $.ajax({
      url: 'api/product_categories',
      success
    });
  },
  createCategory: function(category, success, error){
    $.ajax({
      url: 'api/product_categories',
      type: 'POST',
      data: category,
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        console.log(errors);
        error("product-categories/new", errors);
      }
    });
  },
  deleteCategory: function(data, success){
    $.ajax({
    

      url: `api/product_categories/${data.category.id}`,
      type: 'DELETE',
      success
    });
  }

}


module.exports = CategoryApiUtil;
