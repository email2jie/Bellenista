const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store.js');
const CartItemStore = require('../stores/cart_item_store.js');
const CartItemActions = window.CartItemActions = require('../actions/cart_item_actions.js');
const CheckoutItem = require('./checkout_item');
const ProductStore = require('../stores/product_store.js');
const ProductActions = require('../actions/product_action.js');


const CartItem = React.createClass({
  getInitialState() {
    return {
    cartItems: CartItemStore.all(),
    products: ProductStore.all(),
    total: 0
    };
  },
  
  _cartItemsChanged(){
    this.setState({cartItems: CartItemStore.all()});
    this.setState({total: this.calculateTotal()});
  },
  _productsChanged(){
    this.setState({products: ProductStore.all()});
  },
  componentDidMount(){
    this.productListener = ProductStore.addListener(this._productsChanged);
    ProductActions.fetchAllProducts();
    this.cartItemListener = CartItemStore.addListener(this._cartItemsChanged);
    CartItemActions.fetchAllCartItems();
  },
  componentWillUnmount(){
    this.cartItemListener.remove();
    this.productListener.remove();
  },
  calculateTotal(){
    let total = 0;
    Object.keys(this.state.cartItems).forEach(key =>{
      total += this.state.cartItems[key].quantity * this.state.products[this.state.cartItems[key].product_id].price
    })
    return total;

  },
  removeCartItem(id){
     CartItemActions.deleteCartItem(id); 
  },
  decreaseQuantity(id){
    let data = this.state.cartItems[id]
    if(data.quantity > 1){
    data.quantity -= 1;
    CartItemActions.updateCartItem(id, data);
    }
  },
  increaseQuantity(id){
    let data = this.state.cartItems[id]
    data.quantity += 1;
    CartItemActions.updateCartItem(id, data);
  },


  render(){
    return(<CartItem-Content>
      <h1>Checkout Cart: </h1>
        <br/>
      <ul>
        {
        Object.keys(this.state.cartItems).map(key => {
          let cartItem = this.state.cartItems[key];
            return (<CheckoutItem key={cartItem.id} cartItem={cartItem} product={this.state.products[cartItem.product_id]} removeItem={this.removeCartItem} increaseItem={this.increaseQuantity} decreaseItem={this.decreaseQuantity}/>);
        })

        }
      </ul>

        <div className="total">Total: ${this.state.total}</div>
    </CartItem-Content>);
  }

});

module.exports = CartItem;
