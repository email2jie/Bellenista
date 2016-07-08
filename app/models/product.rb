class Product < ActiveRecord::Base
  include Imageable
  validates :name, :SKU, :price, :stock, presence: true
  validates :name, :SKU, uniqueness: true

  has_many :reviews, dependent: :destroy

  has_many :category_listings,
    inverse_of: :product,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :productId,
    class_name: :CategoryListing

  has_many :categories,
    through: :category_listings,
    source: :product_category

  has_many :cart_items, dependent: :destroy
end
