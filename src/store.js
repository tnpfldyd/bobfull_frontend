import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: '값'
})

export default configureStore({
  reducer: {
    user: user.reducer
  }
}) 