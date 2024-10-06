import { selectCount, INCREMENT, DECREMENT, RESET } from "../reducers/CounterSlice";
import {useSelector, useDispatch} from 'react-redux'

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    console.log('Counter')
    return (
        <>
            <div style={{border: '1px solid red', paddingBottom: '10px'}}>
                <div>count {count}</div>
                <button onClick={() => dispatch(INCREMENT({increment: 10}))}>Increment</button>
                <button onClick={() => dispatch(INCREMENT())}>Increment default</button>
                <button onClick={() => dispatch(DECREMENT())}>Decrement</button>
                <button onClick={() => dispatch(RESET())}>Reset</button>
            </div>
        </>
    )
}

export default Counter;