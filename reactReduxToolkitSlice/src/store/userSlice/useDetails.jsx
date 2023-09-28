import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){
            return [...state,action.payload]
        },
        updateUser(state,action){},
        deleteUser(state,action){},
    }
})

export const {addUser, updateUser,deleteUser} = userSlice.actions
export default userSlice.reducer