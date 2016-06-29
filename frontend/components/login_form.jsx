const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions.js');

const LoginForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    ErrorActions.clearErrors();
    return {
      username: "",
      password: ""
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password
		};

    if (this.props.location.pathname === "/login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.signUp(formData);
    }
	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {

    let navLink;
    if (this.formType() === "login") {
      navLink = <Link to="/signup">sign up instead</Link>;
    } else {
      navLink = <Link to="/login">log in instead</Link>;
    }

		return (
			<div className="login-form-container">
				<form action="#" onSubmit={this.handleSubmit} className="login-form-box">
	        Welcome to Bellenista!
					<br/>
					Please { this.formType() } or { navLink }

	        { this.fieldErrors("base") }
					<div className="login-form">
		        <br />
            <div class="mdl-textfield mdl-js-textfield">
						<label class="mdl-textfield__label"> Username:
		          { this.fieldErrors("username") }
							<input class="mdl-textfield__input" type="text"
		            value={this.state.username}
		            onChange={this.update("username")}
								className="login-input" />
						</label>
            </div>

		        <br />
            <div class="mdl-textfield mdl-js-textfield">
						<label class="mdl-textfield__label"> Password:
		          { this.fieldErrors("password") }
		          <input class="mdl-textfield__input" type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="login-input" />
						</label>
            </div>

		        <br />
						<input class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = LoginForm;
