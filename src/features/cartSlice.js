import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cartItems.push(action.payload);
		},
		removeFromCart: (state, action) => {
			const findIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload
			)
			if (findIndex !== -1) {
				state.cartItems.splice(findIndex, 1);
			}
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;