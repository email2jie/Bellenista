const CategoryListingApiUtil = {
  fetchAllCategoryListings: function(success){
    $.ajax({
      url: 'api/category_listings',
      success
    });
  },
  createCategoryListing: function(category, success, error){
    $.ajax({
      url: 'api/category_listings',
      type: 'POST',
      data: category,
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("category_listings/new", errors);
      }
    });
  },
  deleteCategoryListing: function(data, success){
    $.ajax({
      url: `api/category_listings/${data.cat_list.id}`,
      type: 'DELETE',
      success
    });
  }

}


module.exports = CategoryListingApiUtil;
