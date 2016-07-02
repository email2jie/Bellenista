const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');
const CategoryActions = require('../actions/category_action.js');
const CategoryIndex = require('../components/categoryIndex.jsx');

const CategoryForm = React.createClass({
  
  getInitialState(){
    return {
      name: "",
    };
  },
  componentDidMount(){
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },
  componentWillUnmount(){
    this.errorListener.remove();
  },
  handleSubmit(e){
    e.preventDefault();
    const formData = {category:{
      name: this.state.name,
      }
    };
    CategoryActions.createCategory(formData, this.resetState);
  },
  resetState(){
    this.setState({name: ""});
  },
  fieldErrors(field){
    const errors = ErrorStore.formErrors(this.formType());
    console.log(errors);
    if(!errors[field]) {return;}
    const messages = errors[field].map( (errorMsg, i) => {
    console.log(errorMsg);
    return <li key={i}>{errorMsg}</li>;
    });
    return <ul>{messages}</ul>;

  },
  formType(){
    return this.props.location.pathname.slice(1);
  },
  update(property){
    return (e) => this.setState({[property]: e.target.value});
  },
  render(){
    return (
            <div className="new-category-form">

              <div className="category-index-content">
              <CategoryIndex />
              </div>
              <br/>
              <form onSubmit={this.handleSubmit} className="category-form-box">
                <label> Product Category:
                  {this.fieldErrors("name")}
                  <input type="text" value={this.state.name} onChange={this.update("name")} className="name-input" />
                </label>
                <br/>
                <input type="submit" value="Submit" />
              </form>
            </div>

    );

  }

});

  

module.exports = CategoryForm;
