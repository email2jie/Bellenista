class Product < ActiveRecord::Base
  validates :name, :SKU, :price, :stock, presence: true
  validates :name, :SKU, uniqueness: true
end
