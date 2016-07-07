Image.create!([
  {name: "front_page", description: nil, url: "http://res.cloudinary.com/bellecdn/image/upload/v1467842991/xby8b0amfkeim63htq9c.jpg", thumb_url: "http://res.cloudinary.com/bellecdn/image/upload/c_limit,h_60,w_90/v1467842991/xby8b0amfkeim63htq9c.jpg", resource_type: "image", upload_type: "upload", path: "v1467842991/xby8b0amfkeim63htq9c.jpg", height: "655", width: "1024", imageable_id: nil, imageable_type: nil},
])
ProductCategory.create!([
  {name: "New Arrivals"},
  {name: "Tops"},
  {name: "Bottoms"},
  {name: "Dresses"},
  {name: "Skirts"},
  {name: "Jacket & Coats"}
])
User.create!([
  {username: "guest", password_digest: "$2a$10$KuAyAdjjfWWG7tLxTJWKaeYfH9LdpjrH6IGzebQ.4w5kzIXKQJkMG", session_token: "cPIGH3OcCDp5YvWjh+Dkbg=="},
  {username: "admin", password_digest: "$2a$10$gXlJjmPwi0YjQk1bemrt/.cVaVoEjvlDkckziSem.52fQ9lNaoaWe", session_token: "yv1NKUo12T6QZb31WLbwMg=="}
])
