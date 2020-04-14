import React, { Component } from "react";
import ImageComponent from "./ImageComponent/ImageComponent";
import ProductDetails from "./ProductDetails/ProductDetails";
import classes from "./ProductComponent.css";

class ProductComponent extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-3">
        <div
          className={
            "product " + (this.props.product.compare ? "compareClicked" : "")
          }
        >
          <ImageComponent
            product={this.props.product}
            addToCompare={this.props.addToCompare}
          ></ImageComponent>
          <ProductDetails prodDetails={this.props.product}></ProductDetails>
        </div>
      </div>
    );
  }
}

export default ProductComponent;
