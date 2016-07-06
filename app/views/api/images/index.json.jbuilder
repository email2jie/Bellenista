@images.each do |image|
  json.set! image.id do
    json.partial! 'image', image: image
  end
end
