class CartItem < ActiveRecord::Base
  validates :cart_id, :product_id, presence: true
  validates :cart_id, uniqueness: {scope: :product_id}

  belongs_to :cart
  belongs_to :product
  
  
end
