import {createSlice} from '@reduxjs/toolkit'
export const textHandler = createSlice({
    name:'handletext',
    initialState:{
        string:''
    },
    reducers:{
        showtext:(state,action) => {
            state.string = action.payload
        }
    }
})
export const {showtext} = textHandler.actions
export default textHandler.reducer