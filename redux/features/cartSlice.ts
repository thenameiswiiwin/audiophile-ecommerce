// slices/cartSlice.ts
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface Product {
  id: string
  price: number
}

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  cart: CartItem[]
  totalItems: number
  totalPrice: number
}

const INITIAL_STATE: CartState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    submitToCart: (
      state,
      action: PayloadAction<{ product: Product; count: number }>,
    ) => {
      const { product, count } = action.payload
      const cartItem = state.cart.find((item) => item.id === product.id)

      if (cartItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + count }
            : item,
        )
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + count,
          totalPrice: state.totalPrice + product.price * count,
        }
      }
      const updatedCart = [...state.cart, { ...product, quantity: count }]
      return {
        ...state,
        cart: updatedCart,
        totalItems: state.totalItems + count,
        totalPrice: state.totalPrice + product.price * count,
      }
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      const cartItem = state.cart.find((item) => item.id === product.id)

      if (cartItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.price,
        }
      }

      return state
    },
    minusOneFromCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      const cartItem = state.cart.find((item) => item.id === product.id)

      if (cartItem && cartItem.quantity > 0) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice + product.price,
        }
      }

      return state
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      const updatedCart = state.cart.filter((item) => item.id !== product.id)
      const removedItem = state.cart.find((item) => item.id === product.id)

      if (removedItem) {
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems - removedItem.quantity,
          totalPrice: state.totalPrice - product.price * removedItem.quantity,
        }
      }

      return state
    },
    emptyCart: () => INITIAL_STATE,
  },
})

export const {
  submitToCart,
  addToCart,
  minusOneFromCart,
  removeFromCart,
  emptyCart,
} = cartSlice.actions

export default cartSlice.reducer
