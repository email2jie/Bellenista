const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');
const ReviewActions = require('../actions/review_actions.js');
const ErrorActions = require('../actions/error_actions.js');

const ReviewForm = React.createClass({
  
  getInitialState(){
    return {
      review: "",
    };
  },
  componentDidMount(){
  },
  componentWillUnmount(){
  },
  handleSubmit(e){
    e.preventDefault();
    const formData = {
      review: this.state.review,
      user_id: SessionStore.currentUser().id,
      product_id: this.props.productId
      }
    ReviewActions.createReview(formData, this.resetState);
  },
  resetState(){
    this.setState({review: ""});
  },
  update(property){
    return (e) => this.setState({[property]: e.target.value});
  },
  render(){
    return (
              <div className="review-form-box">
                  <h2>Comments & Reviews</h2>
                  <textarea  
                    rows="4"
                    cols="50"
                    value={this.state.review} 
                    onChange={this.update("review")}
                    className="review-input"></textarea>
                <br/>
                <input className="review-button" onClick={this.handleSubmit} type="submit" value="Add Review" />
              </div>

    );

  }

});

  

module.exports = ReviewForm;
