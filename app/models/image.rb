class Image < ActiveRecord::Base
  validates :name, :url, :thumb_url, :resource_type, :upload_type, :path, :height, :width, presence: true
  validates :name, uniqueness: true

  belongs_to :imageable, polymorphic: true
  
end
