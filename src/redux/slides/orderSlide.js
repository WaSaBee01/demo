import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderItems: [],

    shippingAdress: {
    },

    paymentMethod: '',
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
    user: '',
    isPaid: false,
    paidAt: '',
    isDelivered: false,
    deliveredAt: '',
}

export const orderSlide = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { orderItem } = action.payload
            console.log('orderItem', orderItem)
            console.log('state', state)
            const itemOrder = state.orderItems.find((item) => item.product === orderItem.product)
            if (itemOrder) {
                itemOrder.amount += orderItem?.amount
            } else {
                state.orderItems.push(orderItem)
            }

        },


        increaseAmount: (state, action) => {
            const { idProduct } = action.payload
            const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct)
            itemOrder.amount++
        },

        decreaseAmount: (state, action) => {
            const { idProduct } = action.payload
            const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct)
            itemOrder.amount--
        },

        // removeFromCart: (state, action) => {
        //     const { idProduct } = action.payload
        //     const itemOrder = state?.orderItems?.find((item) => item?.product !== idProduct)
        //     itemOrder.orderItems = itemOrder
        // },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, increaseAmount, decreaseAmount } = orderSlide.actions

export default orderSlide.reducer