const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const ReviewItem = React.createClass({

  render(){
  const review = this.props.review;

  return (
      <li value={review.id} >
        <span>{review.review}</span>
      </li>
    )
  }

});

module.exports = ReviewItem;
