import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';

function LoginPage() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const { setUser } = useUserContext;

    const handleLogin = (e) => {
        e.preventDefault();
        setUser({username});
        console.log('user: ', username);
    }

  return (
    <div>
        <form>
            <label>Username: 
                <input type="text" onChange={(e) => {setUsername(e.target.value)}}></input>
            </label>
            <label>Passcode:
                <input type="password" onChange={(e) => {setPassword(e.target.value)}}></input>
                <button type="submit" onClick={handleLogin}>Submit</button>
            </label>
        </form>
    </div>
  );
}

export default LoginPage;