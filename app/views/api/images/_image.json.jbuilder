json.extract! image, :id, :name, :description, :url, :thumb_url
json.age time_ago_in_words(image.created_at)
