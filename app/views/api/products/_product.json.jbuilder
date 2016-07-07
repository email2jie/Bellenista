json.extract! product, :id, :name, :SKU, :stock, :price, :description, :image_id
json.categories do
  json.array! product.categories do |category|
    json.extract! category, :id
  end
end
