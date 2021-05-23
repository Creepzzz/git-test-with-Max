import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null,
    userId: null
}

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action)=>{
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
            state.userId = action.payload.userId
        },
        setUserLogOutState: state => {
            state.userName = null
            state.userEmail = null
            state.userId = null
        }
    
    }
});

export const {setActiveUser, setUserLogOutState} = loginSlice.actions
export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export const selectUserId = state => state.user.userId
export default loginSlice.reducer