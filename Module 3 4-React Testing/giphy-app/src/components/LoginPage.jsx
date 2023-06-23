import React, { useState, useEffect } from 'react';
import { useUserContext } from '../context/UserContext';
// import Button from '../styled/elements/Button';
// import Input from '../styled/elements/Input';
import axios from 'axios';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const LoginPage = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyApEDRt7OvoRgeK4uhVEKrdgVdTtuAQ5-o",
    authDomain: "giphy-dd41e.firebaseapp.com",
    projectId: "giphy-dd41e",
    storageBucket: "giphy-dd41e.appspot.com",
    messagingSenderId: "592264253757",
    appId: "1:592264253757:web:a4daa310e43b88a2f7b554",
    measurementId: "G-11WF0SQTW9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { setUser } = useUserContext();

  const auth = getAuth();

  const googleSignIn = (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then( async (result) => {
      const user = result.user;

      try {
        const response = await axios.post('http://localhost:3006/register', { 
          username: user.displayName, 
          type: 'google' 
        }); 

        if (response.status === 200) {
          setUser({ username: user.displayName });
          console.log("Registered.");
        } else {
          console.error("error");
        }
      } catch (err) {
        console.error(err);
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    })
  }

  let reqURL;

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e.target.value)

    reqURL = 'http://localhost:3006/' + e.target.value;

      try {
        const response = await axios.post(reqURL, {
          username: username,
          password: password
        });
  
        if (response.status === 200) {
          setUser({ username });
        } else {
          console.error("Error logging in");
        }
      } catch (err) {
        console.error(err);
        if (err.response && err.response.status === 400) {
          setError(err.response.data.error);
        }
      }
    }

    useEffect(() => {
      if (error) {
        alert(error);
        setError();
      }
    }, [error])

  return (
    <div>
        <form>
            <label>Username: 
                <input data-testid="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </label>
            <label>Passcode:
                <input data-testid="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <button value="login" data-testid="login" type="submit" disabled={username.length < 4 || password.length < 4} onClick={handleLogin}>Login</button>
            <button value="register" data-testid="register" type="submit" disabled={username.length < 4 || password.length < 4} onClick={handleLogin}>Register</button>
            <button onClick={(e) => googleSignIn(e)}>
              Sign In With Google
            </button>
        </form>
    </div>
  );
}

export default LoginPage;