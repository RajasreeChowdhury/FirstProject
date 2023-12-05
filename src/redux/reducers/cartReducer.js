const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        
        const existingItem = state.find((item) => item.product.id === action.payload.product.id);
  
        if (existingItem) {
          
          return state.map((item) =>
            item.product.id === action.payload.product.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          );
        } else {
         
          return [...state, action.payload];
        }
  
      case 'REMOVE_FROM_CART':
        return state.filter((item) => item.product.id !== action.payload);
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  