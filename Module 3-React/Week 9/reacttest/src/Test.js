import React from 'react'

export default function Test() {
  return (
    <div className="Test">
    <h1>Testing....</h1>
    <NewTest />
    </div>
  )
}

function NewTest() {
    let audio = new Audio('https://themushroomkingdom.net/sounds/wav/smb/smb_vine.wav');
    const start = () => {
        audio.play();
    }
    return (
        <div className="NewTest">
        <button onClick={start}>Start</button>
        </div>
    );
}

//export default Test;
