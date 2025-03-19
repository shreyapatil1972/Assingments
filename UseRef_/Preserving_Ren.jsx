import React, { useState, useRef, useEffect } from 'react';

const PreservingRen = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(0); // Initialize useRef to avoid undefined value

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    const prevCount = prevCountRef.current;

    return (
        <div>
            <h1>Now: {count}</h1>
            <h2>Before: {prevCount}</h2> {/* Fixed: Displaying previous count */}
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    );
};

export default PreservingRen;
