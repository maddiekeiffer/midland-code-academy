import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Learn React
        </a>
      </header>
      <CountdownTimer />
      <UserArray />
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <ButtonLog />
    </div>
  );
}

// default App;

//1. Create a simple component that has a timer that counts down to the page. (Why might this not be possible at the moment?)
function CountdownTimer() {
  let time = 10;
  const interval = setInterval(() => {
    //console.log(time);
    time--;
    if(time === 0 ) {
      clearInterval(interval);
    }
  }, 1000);
  return(
    <div>
      {time}
    </div>
  );
}

//2. Create an array of 5 users (each being an object with at least ) and display them all to the page using a loop. Think about how you would do it using the {} to render.
function UserArray() {
  const users = [
    {name: "Justin", age: "23", hair: "Brown"},
    {name: "Maddie", age: "23", hair: "Brown"},
    {name: "Breeze", age: "22", hair: "Blonde"},
    {name: "Dylan", age: "20", hair: "Brown"},
    {name: "Stacy", age: "49", hair: "Brown"},
  ]

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Hair Color: {user.hair}</p>
        </div>
      ))}
    </div>
  );
}

//3. Create a component that generates a random number between 1-10 and displays it to the page. Have that component appear 5 times on the page to see if the number is the same or not.
//4. Add a conditionally rendered message to the component in step 3 that shows a message to the DOM if the number is odd or even. (i.e. Number is even).
function RandomNumber() {
  const number = (Math.floor(Math.random() * 10) + 1);
  let string;
  if(number % 2 === 0) {
    string = " is an even number.";
  } else if(number % 2 !== 0) {
    string = " is an odd number.";
  }
  return (
    <div>
    <p>Random Number: {number} {string}</p>
    </div>
  )
}

//5. Create a button that (while we can't update the page until later) logs something to the console when the user clicks it. Also think about how we might have approached some of the projects we worked on last week.
function ButtonLog() {
  let counter = 0;
  const HandleClick = (e) => {
    e.preventDefault();
    counter++;
    console.log(`The button was clicked ${counter} times.`);
  }
  return(
    <div>
      <button onClick={HandleClick}>Push Me!</button>
    </div>
  )
} 
