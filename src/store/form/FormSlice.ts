import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
  type: string
  time: any
  content?: string
  cost: number | ''
}

const initialState: FormState = {
  type: '购物',
  time: null,
  content: '',
  cost: '',
}

export const FormSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    },
    setCost: (state, action: PayloadAction<number>) => {
      state.cost = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setType, setCost } = FormSlice.actions

export default FormSlice.reducer
