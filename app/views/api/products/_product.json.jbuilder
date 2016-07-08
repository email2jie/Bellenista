json.extract! product, :id, :name, :SKU, :stock, :price, :description, :image_id
json.categories do
  json.array! product.categories do |category|
    json.extract! category, :id
  end
end

json.image do
  json.array! product.images do |image|
    json.extract! image, :url
  end
end
