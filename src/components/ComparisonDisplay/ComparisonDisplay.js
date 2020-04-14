import React, { Component } from "react";
import "./ComparisonDisplay.css";

class ComparisonDisplay extends Component {
  render() {
    let header = this.props.products.map((product) => (
      <th key={product.id}>{product.name}</th>
    ));

    let price = this.props.products.map((product) => (
      <td key={product.id} className="text-center">
        {product.price}
      </td>
    ));

    let colors = this.props.products.map((product) => (
      <td key={product.id}>
        {product.colors.map((color, index) => (
          // using index as key here
          <span key={index} className={"bg-" + color} />
        ))}
      </td>
    ));

    let condition = this.props.products.map((product) => (
      <td
        key={product.id}
        className={product.condition === "Frozen" ? "bg-red" : "bg-green"}
      >
        {product.condition}
      </td>
    ));

    return (
      <div className="col-12 mt-3 text-center">
        <table className="table">
          <thead>
            <tr>
              <th /> {/*  adding empty header here */}
              {header}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Price</th>
              {price}
            </tr>
            <tr>
              <th scope="row">Colors</th>
              {colors}
            </tr>
            <tr>
              <th scope="row">Condition</th>
              {condition}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ComparisonDisplay;
