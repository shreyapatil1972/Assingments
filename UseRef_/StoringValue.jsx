import React, { useState, useRef, useEffect } from 'react';

function StoringValue() {
    const timerRef = useRef(0)

    const startTimer = () =>{
        timerRef.current = setInterval(()=>{
            console.log('Timer:',timerRef.current)
        },1000)

    }
    const stopTimer = () => {
        clearInterval(timerRef.current)
    }
    return (
        <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
}

export default StoringValue;
