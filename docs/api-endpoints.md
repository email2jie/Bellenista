# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Products

- `GET /api/products`
  - Products index/search
  - accepts `tag_name` query param to list products by tag
  - accepts pagination params (if I get there)
- `POST /api/products`
- `GET /api/products/:id`
- `PATCH /api/products/:id`
- `DELETE /api/products/:id`

### Product-Categories

- `GET /api/product-categories`
- `POST /api/product-categories`
- `GET /api/product-categories/:id`
- `PATCH /api/product-categories/:id`
- `DELETE /api/product-categories/:id`
- `GET /api/product-categories/:id/products`
  - index of all products for a product-category
  - accepts pagination params (if I get there)

### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/products/:note_id/tags`: add tag to note by name
  - if note doesn't already exist, it will be created
- `DELETE /api/products/:note_id/tags/:tag_name`: remove tag from note by
  name
