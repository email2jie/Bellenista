const ImageApiUtil = {
  fetchAllImages: function(success){
    $.ajax({
      url: 'api/images',
      success
    });
  },
  createImage: function(image, success, error){
    $.ajax({
      url: 'api/images',
      type: 'POST',
      data: image,
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("images/new", errors);
      }
    });
  },
  deleteImage: function(data, success){
    $.ajax({
    

      url: `api/images/${data.image.id}`,
      type: 'DELETE',
      success
    });
  }

}


module.exports = ImageApiUtil;
