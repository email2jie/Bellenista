const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');
const ProductStore = require('../stores/product_store.js');
const CategoryStore = require('../stores/category_store.js');
const CategoryActions = require('../actions/category_action.js');
const CategoryForm = require('./category_form.jsx');
const ImageStore = require('../stores/image_store.js');
const ImageActions = require('../actions/image_actions.js');


let product = {};
const ProductUpdateForm = React.createClass({

  getInitialState(){
    return {
      name: "",
      SKU: "",
      price: 0,
      stock: 0,
      description: "",
      imgId: 0,
      category_ids: [],
      categories: CategoryStore.all(),
      images: ImageStore.all(),
      addCategory: false
    };
  },
  componentDidMount(){
    this.categoryListener = CategoryStore.addListener(this._categoriesChanged);
    this.imageStoreListener = ImageStore.addListener(this._imagesChanged);
    this.productStoreListener = ProductStore.addListener(this.prefillState);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));

    ProductActions.fetchAllProducts(); 
    CategoryActions.fetchAllCategories();
    ImageActions.fetchAllImages();
  },
  _categoriesChanged(){
    this.setState({categories: CategoryStore.all()});
  },
  _imagesChanged(){
   this.setState({images: ImageStore.all()});
  },
  prefillState(){
    product = ProductStore.find(this.getProductId());
    let cat_ids = [];
    product.categories.forEach(obj =>{
      cat_ids.push(obj.id);
    })
    this.setState({
    name: product.name,
    SKU: product.SKU,
    price: product.price,
    stock: product.stock,
    description: product.description,
    category_ids: cat_ids,
    imgId: product.image_id
    })

  },
  componentWillUnmount(){
    this.errorListener.remove();
    this.categoryListener.remove();
    this.productStoreListener.remove();
    this.imageStoreListener.remove();
  },
  handleSubmit(e){
    e.preventDefault();
    const formData = {
      name: this.state.name,
      SKU: this.state.SKU,
      price: parseFloat(this.state.price),
      stock: parseInt(this.state.stock),
      description: this.state.description,
      category_ids: this.state.category_ids,
      image_id: parseInt(this.state.imgId)
    };
    ProductActions.updateProduct(this.getProductId(), formData);
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
  getProductId(){
    let pathname = this.props.location.pathname;
    let arr = pathname.split("/");
    return parseInt(arr[2]);
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
    console.log(this.state.imgId);
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

                <h3>Product Picture:</h3>
                <select onChange={this.update("imgId")} value={this.state.imgId}>
                {
                  Object.keys(this.state.images).map((key, idx) => {
                  return <option key={idx} value={this.state.images[key].id}>{this.state.images[key].name}</option>;
                  })
                
                }
                </select>
                <br/>
                <br/>

                <input type="submit" value="Update Product" />
                <button onClick={this.generateCategoryForm} type="button">Add Category</button>
              </form>
            </div>

    );

  }

});


module.exports = ProductUpdateForm;
