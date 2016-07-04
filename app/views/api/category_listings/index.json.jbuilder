@category_listings.each do |category_listing|
  json.set! category_listing.id do
    json.partial! 'categoryListing', category_listing: category_listing
  end
end
