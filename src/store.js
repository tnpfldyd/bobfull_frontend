import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let baseURL = createSlice({
  name: 'baseURL',
  initialState: {
    baseURL: process.env.REACT_APP_BASE_URL
  },
  reducers: {
    changeURL(state, action) {

    }
  }
})
export let {changeURL} = baseURL.actions;

const reducers = combineReducers({
  user: user.reducer,
  baseURL: baseURL.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const persistReducers = persistReducer(persistConfig, reducers)


const store = configureStore({
  reducer: persistReducers
}) 

export default store