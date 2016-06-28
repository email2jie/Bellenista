const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const HashHistory = ReactRouter.hashHistory;

const SessionApiUtil = window.SessionApiUtil = require('./util/session_api_util.js');

document.addEventListener("DOMContentLoaded", function () {
ReactDOM.render(<div>hi</div>,
    document.getElementById('content')
)});
