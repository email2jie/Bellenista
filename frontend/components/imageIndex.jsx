const React = require("react");

module.exports = React.createClass({
  render: function () {
    return(
      <ul>
        {Object.keys(this.props.images).map(function (key) {
          return (
            <li className="image" key={this.props.images[key].id}>
              <span>{this.props.images[key].age} ago</span>
              <img src={this.props.images[key].url}/>
            </li>
          );
        }, this)}
      </ul>
    );
  }
});
