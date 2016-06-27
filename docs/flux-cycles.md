# Flux Cycles

## Product Cycles

### Products API Request Actions

* `fetchAllProducts`
  0. invoked from `ProudctsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/products` is called.
  0. `receiveAllProducts` is set as the callback.

* `createProduct`
  0. invoked from new product button `onClick`
  0. `POST /api/products` is called.
  0. `receiveSingleProduct` is set as the callback.

* `fetchSingleProduct`
  0. invoked from `ProductDetail` `didMount`/`willReceiveProps`
  0. `GET /api/products/:id` is called.
  0. `receiveSingleProduct` is set as the callback.

* `updateProduct`
  0. invoked from `ProductForm` `onSubmit`
  0. `POST /api/products` is called.
  0. `receiveSingleProduct` is set as the callback.

* `destroyProduct`
  0. invoked from delete product button `onClick`
  0. `DELETE /api/products/:id` is called.
  0. `removeProduct` is set as the callback.

### Products API Response Actions

* `receiveAllProducts`
  0. invoked from an API callback.
  0. `Product` store updates `_products` and emits change.

* `receiveSingleProduct`
  0. invoked from an API callback.
  0. `Product` store updates `_products[id]` and emits change.

* `removeProduct`
  0. invoked from an API callback.
  0. `Product` store removes `_products[id]` and emits change.

### Store Listeners

* `ProductsIndex` component listens to `Product` store.
* `ProductDetail` component listens to `Product` store.



## Product-Category Cycles

### Product-Categorys API Request Actions

* `fetchAllProduct-Categorys`
  0. invoked from `Product-CategorysIndex` `didMount`/`willReceiveProps`
  0. `GET /api/product-categorys` is called.
  0. `receiveAllProduct-Categorys` is set as the callback.

* `createProduct-Category`
  0. invoked from new product-category button `onClick`
  0. `POST /api/product-categorys` is called.
  0. `receiveSingleProduct-Category` is set as the callback.

* `fetchSingleProduct-Category`
  0. invoked from `Product-CategoryDetail` `didMount`/`willReceiveProps`
  0. `GET /api/product-categorys/:id` is called.
  0. `receiveSingleProduct-Category` is set as the callback.

* `updateProduct-Category`
  0. invoked from `Product-CategoryForm` `onSubmit`
  0. `POST /api/product-categorys` is called.
  0. `receiveSingleProduct-Category` is set as the callback.

* `destroyProduct-Category`
  0. invoked from delete product-category button `onClick`
  0. `DELETE /api/product-categorys/:id` is called.
  0. `removeProduct-Category` is set as the callback.

### Product-Category API Response Actions

* `receiveAllProductCategory`
  0. invoked from an API callback.
  0. `Product-Category` store updates `_product-categorys` and emits change.

* `receiveSingleProductCategory`
  0. invoked from an API callback.
  0. `Product-Category` store updates `_product-categorys[id]` and emits change.

* `removeProduct-Category`
  0. invoked from an API callback.
  0. `Product-Category` store removes `_product-categorys[id]` and emits change.

### Store Listeners

* `Product-CategorysIndex` component listens to `Product-Category` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `productsearchBar` `onChange` when there is text
  0. `GET /api/products` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `productsearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
