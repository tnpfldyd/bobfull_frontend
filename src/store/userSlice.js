import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: {
    email: "",
    nickname: "",
    name: "",
    alcohol: null,
    talk: null,
    smoke: null,
    speed: null,
    gender: null,
    manner: null,
    isLoading: false,
    isLogin: null,
  },
  reducers: {
    loginUser(state, action) { 
        state.email = action.payload.email
        state.nickname = action.payload.nickname
        state.name = action.payload.name
        state.alcohol = action.payload.alcohol
        state.talk = action.payload.talk
        state.smoke = action.payload.smoke
        state.speed = action.payload.speed
        state.gender = action.payload.gender
        state.manner = action.payload.manner
        state.isLogin = true
    },
    clearUser(state) {
        state.email = ""
        state.nickname = ""
        state.name = ""
        state.alcohol = null
        state.talk = null
        state.smoke = null
        state.speed = null
        state.gender = null
        state.manner = null
        state.isLogin = false
    }
  }
})

export let {loginUser, clearUser} = user.actions;
export default user