class ProductCategory < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :category_listings,
    inverse_of: :product_category,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :categoryId,
    class_name: :CategoryListing

  has_many :products,
    through: :category_listings,
    source: :product
  
end
