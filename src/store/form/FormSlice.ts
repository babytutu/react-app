import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
  name: string
  age: number
}

const initialState: FormState = {
  name: 'test',
  age: 10,
}

export const FormSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, setAge } = FormSlice.actions

export default FormSlice.reducer
