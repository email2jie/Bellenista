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

  _ensureAdmin(){
    
    if(SessionStore.currentUser().username === "admin"){
      return <Link to="/products/new" className="new-product">Add Product</Link>
    }else{
      return ""
    }
  },

  _ensureLoggedIn(){
    if(SessionStore.currentUser().username !== undefined){
      return <Link to="/checkout" className="checkout">Checkout</Link>
    }else{

      return ""
    }
  },

  greeting() {
    if (SessionStore.isUserLoggedIn()) {

    	return (
    		<hgroup className="header-group">
    			<h2 className="header-name">Hi, {SessionStore.currentUser().username}!</h2>
    			<input className="header-button" type="submit" value="Logout" onClick={ this._handleLogOut } />
          {this._ensureAdmin()}
          {this._ensureLoggedIn()}
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
   let showSplash;
    if(this.props.location.pathname ==="/"){
      showSplash = "splash"

    }
    
    return (
      <div className={showSplash}>
        <topbar>
          { this.greeting() }
        </topbar>
        <header>
          <Link to="/" className="header-link"><div className="logo"><img src="http://res.cloudinary.com/bellecdn/image/upload/c_scale,h_90/v1467842991/bclt7oveeqn4huinfbol.png"/></div></Link>
          <nav className="Main">

            <ul>
              <Link to="/product-category/new-arrivals/"><li>New Arrivals</li></Link>
              <Link to="/product-category/tops/"><li>Tops</li></Link>
              <Link to="/product-category/bottoms/"><li>Bottoms</li></Link>
              <Link to="/product-category/dresses/"><li>Dresses</li></Link>
              <Link to="/product-category/skirts/"><li>Skirts</li></Link>
              <Link to="/product-category/jackets-coats/"><li>Jackets & Coats</li></Link>

            </ul>
          
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
