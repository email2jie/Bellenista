const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const CartItemApiUtil = require('./util/cart_item_api_util.js');
const CartItemActions = require('./actions/cart_item_actions.js');
const CartItemStore = require('./stores/cart_item_store.js');
const Checkout = require('./components/checkout.jsx');

const ImageApiUtil = require('./util/image_api_util.js');
const ImageActions = require('./actions/image_actions.js');
const ImageStore = require('./stores/image_store');
const ImageForm = require('./components/image.jsx');

const CategoryListingApiUtil = require('./util/category_listing_api_util.js');
const CategoryListingActions = require('./actions/category_listing_action.js');

const CategoryActions = require('./actions/category_action.js');
const CategoryApiUtil = require('./util/category_api_util.js');
const CategoryStore = require('./stores/category_store');
const CategoryForm = require('./components/category_form.jsx');

const ProductApiUtil = require('./util/product_api_util.js');
const ProductActions = require('./actions/product_action.js');
const ProductStore = require('./stores/product_store.js');
const Products = require('./components/product.jsx');
const ProductForm = require('./components/product_form.jsx');
const ProductUpdateForm = require('./components/product_update_form.jsx');
const ProductDetail = require('./components/productDetail.jsx');

const SessionActions = require('./actions/session_actions.js');
const SessionStore = require('./stores/session_store.js');
const LoginForm = require ('./components/login_form.jsx');
const App = require('./components/app');

const My404Component = require('./components/my_404_component');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />
      <Route path="/products" component={ Products } />
      <Route path="/products/new" component={ProductForm} onEnter={_ensureAdminUser} />
      <Route path="/products/:id" component={ProductDetail} />
      <Route path="/products/:id/edit" component={ProductUpdateForm} onEnter={_ensureAdminUser} />
      <Route path="/product-category/*/" component={Products} />
      <Route path="/checkout" component={Checkout} onEnter={_ensureLoggedIn}/>
      <Route path="/images/new" component={ImageForm} onEnter={_ensureAdminUser}/>
      <Route path='*' component={My404Component} />
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace){

  if(!SessionStore.isUserLoggedIn()){

  replace('/login');
  
  }
}
function _ensureAdminUser(nextState, replace){

  if(SessionStore.currentUser().username !== "admin"){
   alert("not admin!");
   replace('/login');
  }
  
}

document.addEventListener("DOMContentLoaded", function () {
if (window.currentUser){
  SessionActions.receiveCurrentUser(window.currentUser);
}
ReactDOM.render(appRouter,
    document.getElementById('content')
)});
