const productReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
       
        const existingProduct = state.find((product) => product.id === action.payload.id);
  
        if (existingProduct) {
         
          return state;
        } else {
          
          return [...state, action.payload];
        }
  
      case 'EDIT_PRODUCT':
        return state.map((product) =>
          product.id === action.payload.id ? { ...product, ...action.payload } : product
        );
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  