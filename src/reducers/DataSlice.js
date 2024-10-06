import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchData = createAsyncThunk('data/fetchData', 
    async(payload, {getState}) => {
        console.log('payload', payload);
        const state = getState();
        console.log('state', state);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${state.counter.count}`);
        return response.data;
    }
);

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.status = 'loading'
            state.data = [];
            state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default dataSlice.reducer;