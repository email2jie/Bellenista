const React = require("react");
const ProductStore = require('../stores/product_store.js');
const ProductActions = require('../actions/product_action.js');
const SessionStore = require('../stores/session_store.js');
const CartItemStore = require('../stores/cart_item_store.js');
const CartItemActions = require('../actions/cart_item_actions.js');
const ReviewIndex = require('../components/review.jsx');
const ReviewForm = require('../components/review_form.js');

const ProductDetail = React.createClass({
  getInitialState(){
      return {
        product: ProductStore.find(this.getProductId()),
        cartItem: CartItemStore.all()
      };
  },
  _cartChanged(){
    this.setState({cartItem: CartItemStore.all()});
  },
  componentDidMount(){
    
    this.storeListener = ProductStore.addListener(this.updateProduct);
    ProductActions.fetchAllProducts();
    this.cartListener = CartItemStore.addListener(this._cartChanged);
    CartItemActions.fetchAllCartItems();

  },
  componentWillReceiveProps(){
    this.updateProduct();
  },
  componentWillUnmount(){
    this.cartListener.remove();
    this.storeListener.remove();
  },
  addToCart(e){
    if(SessionStore.currentUser().username === undefined ){
      alert("Sign in to add to cart!");
    }
    let data = {cart_id: SessionStore.currentUser().id, product_id: e.target.value}
    let prod = this.checkForProduct(e.target.value);
    if(Object.keys(prod).length === 0){
      CartItemActions.createCartItem(data);
    }else{
      data = prod;
      data.quantity += 1;
      CartItemActions.updateCartItem(data.id, data);
    }
    prod = {};
  },
  checkForProduct(id){
   let product = {}; 
    Object.keys(this.state.cartItem).forEach(key=>{
      if(this.state.cartItem[key].product_id === parseInt(id)){
        product = this.state.cartItem[key];
      }
    });

    return product;
  },
  updateProduct(){
    this.setState({product: ProductStore.find(this.getProductId())});
  },
  getProductId(){
    let path = this.props.location.pathname;
    let arr = path.split("/");
    return arr[2];
  },
  render() {
    const w = "425";
    const h = "567";
    let url = "";
    if(this.state.product.image){
      url = this.state.product.image[0].url.replace("upload/", `upload/c_scale,h_${h},w_${w}/`);
    }
    return(
            <product key={this.state.product.id}>
              <div className="pro-detail">
              <div className="product-img">
              <img src={url}/>
              </div>
              <div className="product-detail">
              <h1>{this.state.product.name}</h1>
              <h3 className="SKU">SKU {this.state.product.SKU} </h3>
              <h3 className="price">${this.state.product.price} </h3>
              <h3 className="description">Size: {this.state.product.description} </h3>
              <button type="button" onClick={this.addToCart} value={this.state.product.id}>Add To Cart</button> 
              </div>
            </div>

              <div className="reviews">
               <ReviewForm productId={this.state.product.id}/>
               <ReviewIndex productId={this.state.product.id}/>
              </div>

            </product>
    );
  }
});

module.exports = ProductDetail;
