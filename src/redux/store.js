import { configureStore } from '@reduxjs/toolkit';
import showcontentReducer from './showtext'
export default configureStore({
    reducer:{
        content:showcontentReducer
    }
})
