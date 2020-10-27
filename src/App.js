import React, { useState } from 'react';


const App = () => {
    const timeGiver = () => {
        setInterval(() => {
            setCurrTime(new Date().toLocaleTimeString());
        }, 1000);
    }

    const [currTime, setCurrTime] = useState(timeGiver());

    return (
        <>
            <div>
                <h1>{currTime}</h1>
                {/* <button onClick={() => { setCurrTime(new Date().toLocaleTimeString()) }}>{'⌚'} GET TIME {'⌚'}</button> */}
            </div>
        </>
    );
}

export default App;