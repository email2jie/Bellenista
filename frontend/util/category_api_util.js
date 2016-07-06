const CategoryApiUtil = {
  fetchAllCategories: function(success){
    $.ajax({
      url: 'api/product_categories',
      success
    });
  },
  createCategory: function(category, success, error, resetInput){
    $.ajax({
      url: 'api/product_categories',
      type: 'POST',
      data: category,
      success(resp){
      
        success(resp);
        resetInput();
      },
      error(xhr) {
        const errors = xhr.responseJSON;
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
