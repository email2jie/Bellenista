# Bellenista

[Bellenista live][heroku]

[heroku]: http://www.bellenista.org

Bellenista is a full-stack web application inspired by Etsy.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend. 

## Features & Implementation

### Single-Page App
![frontpage]
[frontpage]: ./docs/images/front_page.png

Bellenista is a single-page app where all content is delivered on one static page saving rendering time.

Using the React router and hash history, the root page will render different components based on the location pathname.


### Authentication
![loginform]
[loginform]: ./docs/images/login.png

Authentication is custom made using a session store to demontrate fluency in react and the flux cycle.

### Search/Filtering By Category

![category]
[category]: ./docs/images/category.png

Users will be able to browse by categories.


### Adding New Items
![productform]
[productform]: ./docs/images/new_product.png

Only admin has access to adding new items, pictures for items, and editing items.

# Shopping Cart
![checkout]
[checkout]: ./docs/images/checkout.png

Only registered users can add items to cart and checkout.


# Comments and Reviews
![comments]
[comments]: ./docs/images/comments.png

Only registered users can add coments but all users will be able to see comments made by other users.


