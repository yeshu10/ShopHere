import { createSlice } from '@reduxjs/toolkit';
const initialState = JSON.parse(localStorage.getItem('wishlist')) ?? [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            state.push(action.payload);
        },
        deleteFromWishlist(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },
        clearFromWishlist() {
            return [];
        }
    }
});

export const { addToWishlist, deleteFromWishlist, clearFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
