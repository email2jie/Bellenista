const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const ReviewItem = React.createClass({

  render(){
  const review = this.props.review;

  return (
      <li value={review.id} >
        <span className="timestamp">{review.age}</span>
        <br/>
        <span>{review.username.charAt(0).toUpperCase() + review.username.slice(1) +": " +review.review}</span>
      </li>
    )
  }

});

module.exports = ReviewItem;
