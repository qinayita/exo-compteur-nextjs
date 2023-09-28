import React, { useState } from 'react';

function Counter() {
    const [count, setcount] = useState(0);

    return (
        <>
            <button onClick={() => setcount(count + 1)}>incrémenter</button>
            <p>{count}</p>
            <button disabled={count <= 0} onClick={() => setcount(count > 0 ? count - 1 : 0)}>décrementer</button>
        </>
    );
}

export default Counter;