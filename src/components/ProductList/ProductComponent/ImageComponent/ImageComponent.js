import React, { Component } from "react";
import "../ProductComponent.css";

class ImageComponent extends Component {
  render() {
    let btnCaption = this.props.product.compare ? "Remove" : "Compare";

    return (
      <div>
        <img
          src={require("./images/" + this.props.product.image)}
          alt={this.props.product.prodName}
        />

        <div className="image_hover" />

        <div
          className="btnCompareRemove"
          onClick={() => this.props.addToCompare(this.props.product)}
        >
          {btnCaption}
        </div>
      </div>
    );
  }
}

export default ImageComponent;
