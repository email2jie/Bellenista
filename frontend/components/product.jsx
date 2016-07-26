const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store.js');
const ProductStore = require('../stores/product_store.js');
const ProductActions = require('../actions/product_action.js');
const ProductItem = require('./product_item');

const Product = React.createClass({
  getInitialState() {
    return {
      products: ProductStore.filtered()
    };
  },
  
  _productsChanged(){
    this.setState({products: ProductStore.filtered()});
  },
  componentDidMount(){
    this.productListener = ProductStore.addListener(this._productsChanged);
    ProductActions.fetchAllProducts(this.props.location.pathname.split("/")[2]);
  },
  componentWillReceiveProps(nextProps){
    ProductActions.fetchAllProducts(nextProps.location.pathname.split("/")[2]);
  },
  componentWillUnmount(){
    this.productListener.remove();
  },
  render(){
    return(<Product-Content>
      <ul>
        {
        Object.keys(this.state.products).map(key => {
          let product = this.state.products[key];
            return (<ProductItem key={product.SKU} product={product} productStore={this.state.products}/>);
        })

        }
      </ul>

    </Product-Content>);
  }

});

module.exports = Product;
