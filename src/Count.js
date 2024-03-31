import { useState } from "react";

function Count() {
    let [count, setCount] = useState(5);

    // function inc() {
    //     setCount(count + 1);
    // }
    return (
        <>
            <h1>Count - {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}
export default Count;