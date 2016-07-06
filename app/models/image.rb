class Image < ActiveRecord::Base
  validates :name, :url, :thumb_url, presence: true
  validates :name, uniqueness: true
end
