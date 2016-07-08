const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const CheckoutItem = React.createClass({

  handleClick(e){
    switch(e.target.textContent){
      case "Remove":
        this.props.removeItem(e.target.value);
        e.stopPropagation();
        break;
      case "Increase":
        this.props.increaseItem(e.target.value);
        e.stopPropagation();
        break;
      case "Decrease":
        this.props.decreaseItem(e.target.value);
        e.stopPropagation();
        break;
    }
  },
  render(){
  const item = this.props.cartItem;
  const product = this.props.product;

  const w = "75";
  const h = "75";
  let productImage = "";
  if(product.image.length >0){
    productImage = product.image[0].url;
    productImage = productImage.replace("upload/", `upload/c_fill,h_${h},w_${w}/`);
  }

  
  return (
      <li value={item.id} onClick={this.handleClick}>
        <span className="quantity">Quantity: {item.quantity}</span>
        <span classname="proName">Name: {product.name}</span>
        <span classname="proSKU">SKU: {product.SKU}</span>
        <span className="proImg"><img src={productImage}/></span>
        <span classname="proPrice">Price: ${product.price}</span>
        <div className="buttons">
        <button type="button" onClick={this.handleClick} value={item.id}>Remove</button>
        <button type="button" onClick={this.handleClick} value={item.id}>Increase</button>
        <button type="button" onClick={this.handleClick} value={item.id}>Decrease</button>
      </div>
      </li>
    )
  }

});

module.exports = CheckoutItem;
