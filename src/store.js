import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/CounterSlice'
import dataReducer from './reducers/DataSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        data: dataReducer
    }
});