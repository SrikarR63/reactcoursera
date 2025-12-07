import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cartItems: [],
  };
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.cartItems.push({ ...action.payload, quantity: 1 });
            }
          },
          removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
          },
          clearCart(state) {
            state.cartItems = [];
          },
          increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
              itemToIncrease.quantity += 1;
            }
          },
          decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
              itemToDecrease.quantity -= 1;
            }
          },


    }
});


  //createSlice returns an object containing the generated action creators and the reducer function.
  
  export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;

  //Redux Toolkit automatically creates action creator functions for you.
  /*
  console.log(CartSlice.actions)
    /*
    {
    addItemToCart: function,
    removeItemFromCart: function,
    clearCart: function,
    increaseItemQuantity: function,
    decreaseItemQuantity: function
    }
    */

  export default CartSlice.reducer;


