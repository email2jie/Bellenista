const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const HashHistory = ReactRouter.hashHistory;

const SessionApiUtil = window.SessionApiUtil = require('./util/session_api_util.js');
const SessionActions = window.SessionActions = require('./actions/session_actions.js');
const LoginForm = require ('./components/login_form.jsx');
const App = require('./components/app');

const appRouter = (
  <Router history={ HashHistory }>
    <Route path="/" component={ App }>
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
ReactDOM.render(appRouter,
    document.getElementById('content')
)});
