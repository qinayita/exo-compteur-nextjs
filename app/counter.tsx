"use client";
import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    const incrementCount = () => {
        setCount((prevCount: number) => prevCount + 1);
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount((prevCount: number) => prevCount - 1);
        }
    };

    return (
        <div>
            <h1>Compteur</h1>
            <p>Valeur actuelle du compteur : {count}</p>
            <button onClick={incrementCount}>Incrémenter</button>
            <button onClick={decrementCount} disabled={count === 0}>Décrémenter</button>
        </div>
    );
}



