class CategoryListing < ActiveRecord::Base
  validates :product, :product_category, presence: true

  belongs_to :product, inverse_of: :category_listings
  belongs_to :product_category, inverse_of: :category_listings,
    primary_key: :id,
    foreign_key: :categoryId,
    class_name: :ProductCategory

end
