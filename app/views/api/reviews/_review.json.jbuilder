json.extract! review, :id, :user_id, :product_id, :review
json.extract! review.user, :username
json.age time_ago_in_words(review.created_at)

