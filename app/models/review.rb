class Review < ActiveRecord::Base
  validates :user_id, :product_id, :review, presence: true

  belongs_to :user
  belongs_to :product
end
