import React, { useState, useEffect } from 'react';
import { useUserContext } from '../context/UserContext';
import Button from '../styled/elements/Button';
import Input from '../styled/elements/Input';
import axios from 'axios';


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { setUser } = useUserContext();

  let reqURL;

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e.target.value)

    reqURL = 'http://localhost:3006/auth/' + e.target.value;
    // This is because in our index.js we did app.use('/auth', authRoutes)
    // so the url for login/register is actually this:
    // http://localhost:3006/auth/login and http://localhost:3006/auth/register
    // we have to use auth/login or auth/register 
    // because we split up the files in the auth folder

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
                <Input data-testid="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
            </label>
            <label>Passcode:
                <Input data-testid="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                <Button value="login" data-testid="login" type="submit" disabled={username.length < 4 || password.length < 4} onClick={handleLogin}>Login</Button>
                <Button value="register" data-testid="register" type="submit" disabled={username.length < 4 || password.length < 4} onClick={handleLogin}>Register</Button>
            </label>
        </form>
    </div>
  );
}

export default LoginPage;