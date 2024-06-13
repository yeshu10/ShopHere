import { createSlice } from '@reduxjs/toolkit';
const initialState = JSON.parse(localStorage.getItem('wishlist')) || [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            state.push(action.payload);
        },
        deleteFromWishlist(state, action) {
            const newState = state.filter(item => item.id !== action.payload.id);
            localStorage.setItem('wishlist', JSON.stringify(newState));
            return newState;
        },
        clearFromWishlist() {
            const newState = [];
            localStorage.setItem('wishlist', JSON.stringify(newState));
            return newState;
        }
    }
});

export const { addToWishlist, deleteFromWishlist, clearFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
