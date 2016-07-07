json.extract! image, :id, :name, :description, :url, :thumb_url, :path, :upload_type, :resource_type, :height, :width
json.age time_ago_in_words(image.created_at)
