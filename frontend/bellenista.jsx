const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const HashHistory = ReactRouter.hashHistory;

const ProductApiUtil = require('./util/product_api_util.js');
const ProductActions = require('./actions/product_action.js');
const ProductStore = require('./stores/product_store.js');
const Products = require('./components/product.jsx');

const SessionActions = require('./actions/session_actions.js');
const SessionStore = require('./stores/session_store.js');
const LoginForm = require ('./components/login_form.jsx');
const App = require('./components/app');

const appRouter = (
  <Router history={ HashHistory }>
    <Route path="/" component={ App }>
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />
      <Route path="/products" component={ Products } />
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
