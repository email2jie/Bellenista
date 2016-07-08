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

  greeting() {
    if (SessionStore.isUserLoggedIn()) {

    	return (
    		<hgroup className="header-group">
    			<h2 className="header-name">Hi, {SessionStore.currentUser().username}!</h2>
    			<input className="header-button" type="submit" value="logout" onClick={ this._handleLogOut } />
          {this._ensureAdmin()}
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
          <Link to="/" className="header-link"><h1>Bellenista</h1></Link>
          <nav className="Main">

            <ul>
              <li>New Arrivals</li>
              <li>Tops</li>
              <li>Bottoms</li>
              <li>Dresses</li>
              <li>Skirts</li>
              <li>Jackets & Coats</li>

            </ul>
          
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
