import { useEffect, useState } from "react";

const Home = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('count', count);
    }, [count]);
    return (
        <>
            <div>Home</div>
            <div>counter: {count}</div>
            
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default Home;