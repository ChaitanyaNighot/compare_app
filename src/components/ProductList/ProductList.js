import React, { Component } from "react";
import ProductComponent from "./ProductComponent/ProductComponent";
import "./ProductList.css";

class ProductList extends Component {
  render() {
    const ProdList = this.props.Products.map((product) => {
      return (
        <ProductComponent
          key={product.id}
          product={product}
          addToCompare={this.props.addToCompare}
        ></ProductComponent>
      );
    });

    return <div className="row mt-3">{ProdList}</div>;
  }
}

export default ProductList;
