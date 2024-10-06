import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { fetchData } from '../reducers/DataSlice';
import {INCREMENT, DECREMENT, RESET } from "../reducers/CounterSlice";

const Data = () => {
    const {data, status, error} = useSelector((state) => state.data);
    console.log('data', data);
    console.log('status', status);
    console.log('error', error);
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);

    useEffect(() => {
        dispatch(fetchData({increment: 5}));
    }, [count]);

    return (
        <>
            <div style={{border: '1px solid red', marginTop: '10px', paddingBottom: '10px'}}>
                <h2>{count}</h2>
                <h2>{status}</h2>
                <p>{JSON.stringify(data)}</p>
                <button onClick={() => dispatch(INCREMENT({increment: 10}))}>Increment</button>
                <button onClick={() => dispatch(INCREMENT())}>Increment default</button>
                <button onClick={() => dispatch(DECREMENT())}>Decrement</button>
                <button onClick={() => dispatch(RESET())}>Reset</button>
            </div>
        </>
    )
}

export default Data;