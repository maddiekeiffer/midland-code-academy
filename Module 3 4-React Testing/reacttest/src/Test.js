import React from 'react';

export function Test() {
  return (
    <div className="Test">
    <h1>Testing....</h1>
    </div>
  )
}

export function NewTest() {
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

//Can write it like it is below:
//function Test() {};
//THEN below function:
//export default Test;
