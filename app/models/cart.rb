class Cart < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: true

  belongs_to :user
  has_many :cart_items, dependent: :destroy
  
  
end
