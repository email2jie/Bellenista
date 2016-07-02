const React = require('react');
const hashHistory = require('react-router').hashHistory;

const CategoryItem = React.createClass({


  render(){
  const category = this.props.category;
  return (
    <li>
      <span>{category.name}</span>
    </li>
    )
  }

});

module.exports = CategoryItem;
