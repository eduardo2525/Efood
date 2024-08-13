import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardapioItemType } from '../../Home/Restaurantes/index'

type CartState = {
  items: CardapioItemType[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItemType>) => {
      const comida = state.items.find((item) => item.id === action.payload.id)

      if (!comida) {
        state.items.push(action.payload)
      } else {
        alert('Esse Prato já esta no Carinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((Item) => Item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
