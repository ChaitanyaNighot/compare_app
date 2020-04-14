import React , {Component} from 'react';
import './ProductDetails.css';

class ProductDetails extends Component{

    render(){

        return(
            <div className="detailContainer">
            <span className="product_price"> {this.props.prodDetails.price}</span>
            <span className="product_name"> {this.props.prodDetails.name}</span>    
            <br/> 
            <span className="product_desccription"> {this.props.prodDetails.description}</span>
        </div>
        );

    }

}

export default ProductDetails;