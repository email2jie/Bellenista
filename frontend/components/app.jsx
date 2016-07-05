const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(){
    SessionActions.logOut();
  },


  greeting() {
    if (SessionStore.isUserLoggedIn()) {

    	return (
    		<hgroup className="header-group">
    			<h2 className="header-name">Hi, {SessionStore.currentUser().username}!</h2>
    			<input className="header-button" type="submit" value="logout" onClick={ this._handleLogOut } />
    		</hgroup>
    	);
    } else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  },

  render() {
    return (
      <div>
        <topbar>
          { this.greeting() }
        </topbar>
        <header>
          <Link to="/" className="header-link"><h1>Bellenista</h1></Link>
          <nav className="Main">

            <ul>
              <li>New Arrivals</li>
              <li>Tops</li>
              <li>Bottoms</li>
              <li>Dresses</li>
              <li>Skirts</li>
              <li>Jackets & Coats</li>
              <li><Link to="/products/new" className="new-product">Add Product</Link></li>
              <li><Link to="/product-categories/new" className="new-categories-product">Add Product Category</Link></li>

            </ul>
          
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
