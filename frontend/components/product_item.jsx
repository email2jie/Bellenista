const React = require('react');
const hashHistory = require('react-router').hashHistory;

const ProductItem = React.createClass({


  render(){
  const product = this.props.product;
  return (
    <li>
      <span>{product.name}</span>
      <span>{product.SKU}</span>
      <span>{product.price}</span>
      <span>{product.stock}</span>
      <span>{product.description}</span>
    </li>
    )
  }

});

module.exports = ProductItem;
