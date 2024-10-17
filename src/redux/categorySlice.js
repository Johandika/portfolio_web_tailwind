import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  role: 'ui/ux',
}

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    changeToUiUx: (state) => {
      state.role = 'ui/ux'
    },
    changeToProgrammer: (state) => {
      state.role = 'programmer'
    },
    changeRole: (state, action) => {
      state.role = action.payload
    },
  },
})

export const { changeToUiUx, changeToProgrammer, changeRole } = roleSlice.actions

export default roleSlice.reducer