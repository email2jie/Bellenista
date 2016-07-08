const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const ProductItem = React.createClass({

  render(){
  const product = this.props.product;
  const w = "264";
  const h = "356";
  let productImage = "";
  if(product.image.length >0){
    productImage = product.image[0].url;
    productImage = productImage.replace("upload/", `upload/c_scale,h_${h},w_${w}/`);
  }

  return (
    <Link to={"/products/" + product.id}>
      <li value={product.id} >
        <span>{product.name}</span>
        <img src={productImage}/>
      </li>
    </Link>
    )
  }

});

module.exports = ProductItem;
