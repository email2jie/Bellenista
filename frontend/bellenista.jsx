const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const CategoryListingApiUtil = window.listingApi = require('./util/category_listing_api_util.js');

const CategoryActions = require('./actions/category_action.js');
const CategoryApiUtil = require('./util/category_api_util.js');
const CategoryStore = require('./stores/category_store');
const CategoryForm = require('./components/category_form.jsx');

const ProductApiUtil = require('./util/product_api_util.js');
const ProductActions = require('./actions/product_action.js');
const ProductStore = require('./stores/product_store.js');
const Products = require('./components/product.jsx');
const ProductForm = require('./components/product_form.jsx');

const SessionActions = require('./actions/session_actions.js');
const SessionStore = require('./stores/session_store.js');
const LoginForm = require ('./components/login_form.jsx');
const App = require('./components/app');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />
      <Route path="/products" component={ Products } />
      <Route path="/products/new" component={ProductForm} onEnter={_ensureLoggedIn} />
      <Route path="/product-categories/new" component={CategoryForm} onEnter={_ensureLoggedIn} />
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace){

  if(!SessionStore.isUserLoggedIn()){

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
