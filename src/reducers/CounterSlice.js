import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        INCREMENT: (state, action) => {
            if(action.payload?.increment)
                state.count += action.payload.increment;
            else
                state.count += 5;
        },
        DECREMENT: (state, action) => {
            if(action.payload?.decrement)
                state.count += action.payload.decrement;
            else
                state.count -= 5;
        },
        RESET: (state, action) => {
            state.count = 0;
        },
    }
});

export const {INCREMENT, DECREMENT, RESET} = counterSlice.actions;

export const selectCount = (state) => state.counter.count;

export default counterSlice.reducer;