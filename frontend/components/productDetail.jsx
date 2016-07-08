const React = require("react");
const ProductStore = require('../stores/product_store.js');
const ProductActions = require('../actions/product_action.js');

const ProductDetail = React.createClass({
  getInitialState(){
    return {product: ProductStore.find(this.getProductId())};
  },
  componentDidMount(){
    
    this.storeListener = ProductStore.addListener(this.updateProduct);
    ProductActions.fetchAllProducts();
    this.updateProduct();
  },
  componentWillReceiveProps(){
    
    this.updateProduct();

  },
  componentWillUnmount(){
    this.storeListener.remove();
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
    console.log(this.state.product);
    const w = "425";
    const h = "567";
    let url = "";
    if(this.state.product.image){
      url = this.state.product.image[0].url.replace("upload/", `upload/c_scale,h_${h},w_${w}/`);
    }
    return(
            <product key={this.state.product.id}>
              <div className="product-img">
              <img src={url}/>
              </div>
              <div className="product-detail">
              <h1>{this.state.product.name}</h1>
              <h3 className="SKU">SKU {this.state.product.SKU} </h3>
              <h3 className="price">${this.state.product.price} </h3>
              <h3 className="description">Size: {this.state.product.description} </h3>
              
              </div>

            </product>
    );
  }
});

module.exports = ProductDetail;
