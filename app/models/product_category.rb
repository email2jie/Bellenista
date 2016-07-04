class ProductCategory < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :category_listings,
    primary_key: :id,
    foreign_key: :categoryId,
    class_name: :CategoryListing

  has_many :products,
    through: :category_listings,
    source: :Product
  
  
    
  
end
