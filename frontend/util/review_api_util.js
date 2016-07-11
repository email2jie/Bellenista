const ReviewApiUtil = {
  fetchAllReviews: function(success, filter){
      $.ajax({
            url: 'api/reviews',
            success(resp){
              success(resp, filter);
            }
          });
    },
  createReview: function(data, success, error, callback){
      $.ajax({
            url: 'api/reviews',
            type: 'POST',
            data: {review: data},
            success(resp){
              success(resp),
              callback();
            },
            error(xhr) {
                    const errors = xhr.responseJSON;
                    error("reviews/new", errors);
                  }
          });
    },
  updateReview: function(id, data, success){
      $.ajax({
            url: `api/reviews/${id}`,
            type: 'PATCH',
            data: {review: data},
            success
          });
    
    },
  deleteReview: function(id, success){
      $.ajax({
            url: `api/reviews/${id}`,
            type: 'DELETE',
            success
          });
    }

}


module.exports = ReviewApiUtil;
