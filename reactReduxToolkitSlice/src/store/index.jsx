import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice/useDetails'

const store = configureStore({
        reducer:{
            user:userSlice
        }
})

export default store;