import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [{
            id: "mint-peppermint-ginger-chai",
            image: "mint-peppermint-ginger-chai/1.jpg",
            name: "Neuro Mints Ideal State - Peppermint / Honey Lemon",
            price: 39,
            quantity: 5,
            totalPrice: 195,
        }],
        totalPrice: 0,
    },
    reducers: {
        addProduct(state, action) {
            const newitem = action.payload;
            const existingItem = state.products.find(item => item.id === newitem.id);
            state.totalPrice = state.totalPrice + newitem.price;
            if (!existingItem) {
                state.products.push({
                    name: newitem.name,
                    price: newitem.price,
                    image: newitem.image,
                    quantity: 1,
                    id: newitem.id,
                    totalPrice: newitem.price
                })
            } else {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newitem.price;
            }
        },
        removeProduct(state, action) {
            const newitem = action.payload;
            const existingItem = state.products.find(item => item.id === newitem.id);
            state.totalPrice = state.totalPrice - newitem.price;
            if (existingItem.quantity === 1) {
                state.products = state.products.filter(item => item.id !== newitem.id);
            } else {
                existingItem.quantity = existingItem.quantity - 1;
                existingItem.totalPrice = existingItem.totalPrice - newitem.price;
            }
        },
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;