class CategoryListing < ActiveRecord::Base
  validates :productId, :categoryId, presence: true

  belongs_to :product 
  belongs_to :product_category,
    primary_key: :id,
    foreign_key: :categoryId,
    class_name: :ProductCategory
  
  



end
