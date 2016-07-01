const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');
const ProductActions = require('../actions/product_action.js');

const ProductForm = React.createClass({

  getInitialState(){
    return {
      name: "",
      SKU: "",
      price: 0.00,
      stock: 0,
      description: ""
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
    const formData = {product:{
      name: this.state.name,
      SKU: this.state.SKU,
      price: parseFloat(this.state.price),
      stock: parseInt(this.state.stock),
      description: this.state.description
      }
    };
    ProductActions.createProduct(formData);
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
    console.log(this.formType());
    return (
            <div className="new-product-form">
              <form onSubmit={this.handleSubmit} className="product-form-box">
                <label> Product Name:
                  {this.fieldErrors("name")}
                  <input type="text" value={this.state.name} onChange={this.update("name")} className="name-input" />
                </label>
                <br/>
                <label> SKU:
                  {this.fieldErrors("SKU")}
                  <input type="text" value={this.state.SKU} onChange={this.update("SKU")} className="sku-input" />
                </label>
                <br/>
                <label> Price: $
                  {this.fieldErrors("price")}
                  <input type="number" min="0" max="9999" step="0.01" size="4" value={this.state.price} onChange={this.update("price")} className="price-input" />
                </label>
                <br/>
                <label> Stock: 
                  {this.fieldErrors("stock")}
                  <input type="number" value={this.state.stock} onChange={this.update("stock")} className="stock-input" />
                </label>
                <br/>
                <label> Description:
                  {this.fieldErrors("description")}
                  <input type="text" value={this.state.description} onChange={this.update("description")} className="description-input" />
                </label>
                <br/>
                <input type="submit" value="Submit" />
              </form>
            </div>

    );

  }

});


module.exports = ProductForm;
