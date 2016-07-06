const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');
const ProductActions = require('../actions/product_action.js');
const CategoryStore = require('../stores/category_store.js');
const CategoryActions = require('../actions/category_action.js');
const CategoryForm = require('./category_form.jsx');


const ProductForm = React.createClass({

  getInitialState(){
    return {
      name: "",
      SKU: "",
      price: 0.00,
      stock: 0,
      description: "",
      category_ids: [],
      categories: CategoryStore.all(),
      addCategory: false
    };
  },
  componentDidMount(){
    this.categoryListener = CategoryStore.addListener(this._categoriesChanged);
    CategoryActions.fetchAllCategories();
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },
  _categoriesChanged(){
    this.setState({categories: CategoryStore.all()});
  },
  componentWillUnmount(){
    this.errorListener.remove();
    this.categoryListener.remove();
  },
  handleSubmit(e){
    e.preventDefault();
    const formData = {product:{
      name: this.state.name,
      SKU: this.state.SKU,
      price: parseFloat(this.state.price),
      stock: parseInt(this.state.stock),
      description: this.state.description,
      category_ids: this.state.category_ids
      }
    };
    ProductActions.createProduct(formData);
  },
  fieldErrors(field){
    const errors = ErrorStore.formErrors(this.formType());
    //console.log(errors);
    if(!errors[field]) {return;}
    const messages = errors[field].map( (errorMsg, i) => {
    //console.log(errorMsg);
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
  handleChangeChk(e){
    const key = parseInt(e.target.value);
    if(this.state.category_ids.includes(key)){
      const idx = this.state.category_ids.indexOf(key);
      this.state.category_ids.splice(idx, 1);
      this.setState({category_ids: this.state.category_ids});
    }else{
      this.state.category_ids.push(key);
      this.setState({category_ids: this.state.category_ids});
    }

  },
  generateCategoryForm(){
    this.setState({addCategory: !this.state.addCategory});
  },
  render(){
    return (
            <div className="new-product-form">
              <form onSubmit={this.handleSubmit} className="product-form-box">
                <label> Product Name:
                  {this.fieldErrors("name")}
                  <input type="text" 
                    value={this.state.name} 
                    onChange={this.update("name")} 
                    className="name-input" />
                </label>
                <br/>
                <label> SKU:
                  {this.fieldErrors("SKU")}
                  <input type="text" 
                    value={this.state.SKU} 
                    onChange={this.update("SKU")} 
                    className="sku-input" />
                </label>
                <br/>
                <label> Price: $
                  {this.fieldErrors("price")}
                  <input type="number" 
                    min="0" 
                    max="9999" 
                    step="0.01" 
                    size="4" 
                    value={this.state.price} 
                    onChange={this.update("price")} 
                    className="price-input" />
                </label>
                <br/>
                <label> Stock: 
                  {this.fieldErrors("stock")}
                  <input type="number" 
                    value={this.state.stock} 
                    onChange={this.update("stock")} 
                    className="stock-input" />
                </label>
                <br/>
                <label> Description:
                  {this.fieldErrors("description")}
                  <input type="text" 
                    value={this.state.description} 
                    onChange={this.update("description")} 
                    className="description-input" />
                </label>
                <br/>
                <br/>
                <h3>Categories:</h3>
                {
                  Object.keys(this.state.categories).map((key, idx) => {
                  const checked = (this.state.category_ids.includes(parseInt(key))) ? true : false;
                    return (
                    <label>
                        <input
                          key={idx}
                          type="checkbox"
                          checked={checked}
                          value={key}
                          onChange={this.handleChangeChk}
                        />
                        {this.state.categories[key].name}
                        <br />
                    </label>
                    );
                  })
                }
                {
                  this.state.addCategory === true ? <CategoryForm /> : ""
                }
                <br />


                <input type="submit" value="Create Product" />
                <button onClick={this.generateCategoryForm} type="button">Add Category</button>
              </form>
            </div>

    );

  }

});


module.exports = ProductForm;
