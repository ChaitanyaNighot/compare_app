import * as actionTypes from './actions';

const initialState = {
  "products": [{
      "id": "1",
      "name": "Cherry",
      "image": "Cherry.png",
      "price": "$1.99",
      "colors": ["red", "green", "blue"],
      "condition": "Fresh",
      "description": "Two Cherries",
      "compare":false
    },
    {
      "id": "2",
      "name": "Orange",
      "image": "Orange.png",
      "price": "$2.99",
      "colors": ["green", "blue"],
      "condition": "Frozen",
      "description": "Giant Orange",
      "compare":false
    },
    {
      "id": "3",
      "name": "Nuts",
      "image": "Nuts.png",
      "price": "$1.00",
      "colors": ["red"],
      "condition": "Frozen",
      "description": "Mixed Nuts",
      "compare":false
    },
    {
      "id": "4",
      "name": "Strawberry",
      "image": "Strawberry.png",
      "price": "$1.49",
      "colors": ["blue"],
      "condition": "Fresh",
      "description": "Just Strawberry",
      "compare":false
    }
  ]
}; 

const reducer = (state = initialState, action) => {
    switch(action.type){
      case actionTypes.ADD_PRODUCT_FOR_COMPARISON :
        //here we will loop through all the products in the list.
        //will inverse "compare" attribute of json object.      
        console.log('clicked');
        return {
          //updating state in immutable way.
          ...state, //new state object.
          products: state.products.map(product => { //updating products array 
            
            //if current product id in array is same as the passed (clicked) product id
            //then inverse compare to indicate change in operation.
            if(product.id === action.product.id) 
            {
              //created new product object and then inversed compare attribute in immutable manner.
              return ({...product, compare: !product.compare})
            }
            else
            {
              // if product id do not match means the product is not clicked and therefore
              //return it as it is.
              return (product);
            }

          }) 
        };

      default:
        return state;
    }
}

export default reducer;