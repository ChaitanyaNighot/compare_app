import React, { Component } from "react";
import ComparisonDisplay from "../../components/ComparisonDisplay/ComparisonDisplay";
import ProductList from "../../components/ProductList/ProductList";
import "./ProductCompare.css";
import * as actionTypes from "../../store/actions";
import { connect } from "react-redux";

class ProductCompare extends Component {
  render() {
    //make list of products which has compare property set true.
    const products = this.props.selectedProductForComaprison.filter(
      (product) => product.compare
    );

    return (
      <div className="container">
        <p className="title">Compare Products</p>
        <ProductList
          Products={this.props.selectedProductForComaprison}
          addToCompare={this.props.onClickedCompareProduct}
        ></ProductList>

        {products.length >= 2 ? (
          <ComparisonDisplay products={products}></ComparisonDisplay>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProductForComaprison: state.products,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    onClickedCompareProduct: (id) =>
      dispatch({ type: actionTypes.ADD_PRODUCT_FOR_COMPARISON, product: id }),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(ProductCompare);
