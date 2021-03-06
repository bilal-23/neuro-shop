import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addProduct(state, action) {
            state.totalQuantity++;
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
                    totalPrice: newitem.price,
                    description: newitem.description
                })
            } else {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.totalPrice = existingItem?.totalPrice + newitem.price;
            }
        },
        removeProduct(state, action) {
            state.totalQuantity--;
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
        resetCart(state) {
            state.totalQuantity = 0;
            state.products = [];
            state.totalPrice = 0;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;