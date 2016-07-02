const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store.js');
const CategoryStore = window.CategoryStore = require('../stores/category_store.js');
const CategoryActions = window.CategoryActions = require('../actions/category_action.js');
const CategoryItem = require('./categoryItem.jsx');

const CategoryIndex = React.createClass({
  getInitialState() {
    return {categories: CategoryStore.all()};
  },
  
  _categoriesChanged(){
    this.setState({categories: CategoryStore.all()});
  },
  
  componentDidMount(){
    this.categoryListener = CategoryStore.addListener(this._categoriesChanged);
    CategoryActions.fetchAllCategories();
  },
  componentWillUnmount(){
    this.categoryListener.remove();
  },


  render(){
    return(<Category-Content>
      <ul>
        {
        Object.keys(this.state.categories).map(key => {
          let category = this.state.categories[key];
            return (<CategoryItem key={category.id} category={category} />);
        })
        }
      </ul>

    </Category-Content>);
  }

});

module.exports = CategoryIndex;
