const CartReducer = (state,action) => {
    let newCarts = []
    switch (action.type) {
        case 'ADD_TO_CART':
            newCarts = [...state.carts, action.id]
            localStorage.setItem("carts", JSON.stringify(newCarts));
            return {
              ...state,
              carts: newCarts,
            };
        case 'REMOVE_FROM_CART':

           case 'REMOVE_FROM_CART':
  newCarts = state.carts.filter(
    (cartId) => cartId !== action.id
  );

  localStorage.setItem(
    'carts',
    JSON.stringify(newCarts)
  );

  return {
    ...state,
    carts: newCarts,
  };
        default:
            return state;
            break;
    }
}

export default CartReducer
