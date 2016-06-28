# Bellenista

[Heroku link][heroku] - Future Production Link

[heroku]: http://www.herokuapp.com/
[bellenista]: http://www.bellenista.com

## Minimum Viable Product

Bellenista is a web application that will be build using Ruby on Rails and React.js. It is inspired by Etsy.com but specifically for clothing. It will also serve as the migration from my wordpress site [Bellenista][bellenista]. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README
- [ ] Product Listings
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Shopping Cart
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments / Reviews
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Search
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 day, W1 Wed 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Products Model, API, and basic APIUtil (1.5 days, W1 F 12pm)

**Objective:** Products can be created, read, edited and destroyed through
the API.

- [ ] create `Product` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for Products (`ProductsController`)
- [ ] jBuilder views for products
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W2 Mon 6pm)

**Objective:** Products can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each product component, building out the flux loop as needed.
  - [ ] `ProductsIndex`
  - [ ] `ProductsIndexItem`
  - [ ] `ProductForm`
- [ ] save Products to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days, W2 Tu 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Product-Category (1 day, W2 Wed 12pm)

**Objective:** Products belong to Product-Category, and can be viewed by category.

- [ ] create `Product-Category` model
- build out API, Flux loop, and components for:
  - [ ] product-category CRUD
  - [ ] adding products requires a product-category
  - [ ] moving products to a different product-category
  - [ ] viewing products by product-category
- Use CSS to style new views

Phase 3 adds organization to the Products. Products belong to a Product-Category,
which has its own `Index` view.

### Phase 6: Tags (1 days, W2 Th 12pm)

**Objective:** Products can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for product-category
  - [ ] adding tags to product-category
  - [ ] creating tags while adding to product-category
  - [ ] searching product-category by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Proudcts (0.5 days, W2 Th 6pm)

**objective:** Enable complex styling of products.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Search through products for blocks of text
- [ ] Pagination / infinite scroll for Products Index
- [ ] Changelogs for Products
- [ ] Multiple sessions

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
