const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store.js');
const ReviewStore = require('../stores/review_store.js');
const ReviewActions = require('../actions/review_actions.js');
const ReviewItem = require('./review_item');

const Review = React.createClass({
  getInitialState() {
    return {
      reviews: ReviewStore.filtered()
    };
  },
  
  _reviewsChanged(){
    this.setState({reviews: ReviewStore.filtered()});
  },
  componentDidMount(){
    this.reviewListener = ReviewStore.addListener(this._reviewsChanged);
    ReviewActions.fetchAllReviews(this.props.productId);
  },
  componentWillReceiveProps(){
    ReviewActions.fetchAllReviews(this.props.productId);
  },
  componentWillUnmount(){
    this.reviewListener.remove();
  },
  render(){
    return(<Review-Content>
      <ul>
        {
        Object.keys(this.state.reviews).map(key => {
          let review = this.state.reviews[key];
            return (<ReviewItem key={review.id} review={review} />);
        })

        }
      </ul>

    </Review-Content>);
  }

});

module.exports = Review;
