const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store.js');
const ProductStore = require('../stores/product_store.js');
const ProductActions = require('../actions/product_action.js');
const ProductItem = require('./product_item');

const Product = React.createClass({
  getInitialState() {
    return {
      products: ProductStore.all()
    };
  },
  
  _productsChanged(){
    this.setState({products: ProductStore.all()});
  },
  componentDidMount(){
    this.productListener = ProductStore.addListener(this._productsChanged);
    ProductActions.fetchAllProducts(this.props.location.pathname.split("/")[2]);
  },
  componentWillReceiveProps(){
    this.product2Listener = ProductStore.addListener(this._productsChanged);
    ProductActions.fetchAllProducts(this.props.location.pathname.split("/")[2]);
  },
  componentWillUnmount(){
    this.productListener.remove();
    this.product2Listener.remove();
  
  },


  render(){
    return(<Product-Content>
      <ul>
        {
        Object.keys(this.state.products).map(key => {
          let product = this.state.products[key];
            return (<ProductItem key={product.SKU} product={product} />);
        })

        }
      </ul>

    </Product-Content>);
  }

});

module.exports = Product;
