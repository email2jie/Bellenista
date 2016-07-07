const React = require("react");

module.exports = React.createClass({
  render: function () {
    const w = "150";
    const h = "150";
    return(
      <div className="image-item">
        {Object.keys(this.props.images).map(function (key) {
        const url = this.props.images[key].url.replace("upload/", `upload/c_fill,w_${w},h_${h}/`);
          return (
            <li className="image" key={this.props.images[key].id}>
              <span>{this.props.images[key].age} ago</span>
              <img src={url}/>
            </li>
          );
        }, this)}
      </div>
    );
  }
});
