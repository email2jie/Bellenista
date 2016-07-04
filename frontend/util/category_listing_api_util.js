const CategoryListingApiUtil = {
  fetchAllListings: function(success){
    $.ajax({
      url: 'api/category_listings',
      success
    });
  },
  createListing: function(category, success, error){
    $.ajax({
      url: 'api/category_listings',
      type: 'POST',
      data: category,
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        console.log(errors);
        error("category_listings/new", errors);
      }
    });
  },
  deleteListing: function(data, success){
    $.ajax({
      url: `api/category_listings/${data.cat_list.id}`,
      type: 'DELETE',
      success
    });
  }

}


module.exports = CategoryListingApiUtil;
