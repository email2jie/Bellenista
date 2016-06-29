class Product < ActiveRecord::Base
  validates :name, :SKU, :price, :stock, presence: true
end
