class Product < ActiveRecord::Base
  validates :name, :SKU, :price, :stock, presence: true
  validates :name, :SKU, uniqueness: true

  has_many :category_listings,
    primary_key: :id,
    foreign_key: :productId,
    class_name: :CategoryListing

  has_many :categories,
    through: :category_listings,
    source: :ProductCategory
  
  
    
  
end
