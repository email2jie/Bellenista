# Phase 3: Product-Categories and Tags (2 days)

## Rails
### Models
* Product-Category
* Tag
* Tagging

### Controllers
* Api::Product-CategoriesController (create, destroy, index, show, update)

### Views
* product-categories/index.json.jbuilder
* product-categories/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* Product-CategoriesIndex
  - Product-CategoryIndexItem
* Product-CategoryForm
* SearchIndex

### Stores
* Product-Category

### Actions
* ApiActions.receiveAllProduct-Categories -> triggered by ApiUtil
* ApiActions.receiveSingleProduct-Category
* ApiActions.deleteProduct-Category
* Product-CategoryActions.fetchAllProduct-Categories -> triggers ApiUtil
* Product-CategoryActions.fetchSingleProduct-Category
* Product-CategoryActions.createProduct-Category
* Product-CategoryActions.editProduct-Category
* Product-CategoryActions.destroyProduct-Category

### ApiUtil
* ApiUtil.fetchAllProduct-Categories
* ApiUtil.fetchSingleProduct-Category
* ApiUtil.createProduct-Category
* ApiUtil.editProduct-Category
* ApiUtil.destroyProduct-Category

## Gems/Libraries
