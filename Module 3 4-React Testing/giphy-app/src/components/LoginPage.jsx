import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import Button from '../styled/elements/Button';
import Input from '../styled/elements/Input';
import axios from 'axios';


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useUserContext();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3006/login', {
                username: username,
                password: password
            });
            if(response.status === 200) {
                setUser({username});
                console.log('user: ', username);        
            } else {
                console.error('Error logging in');
            }
        }
        catch (err) {
            console.error(err);
        }
    }

  return (
    <div>
        <form>
            <label>Username: 
                <Input data-testid="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
            </label>
            <label>Passcode:
                <Input data-testid="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                <Button data-testid="login" type="submit" disabled={username.length < 4 || password.length < 4} onClick={handleLogin}>Submit</Button>
            </label>
        </form>
    </div>
  );
}

export default LoginPage;