import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import Button from '../styled/elements/Button';
import Input from '../styled/elements/Input';
const bcrypt = require("bcryptjs");

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useUserContext();

    const saltRounds = 10;
    let hash;

    const handleLogin = (e) => {
        e.preventDefault();
        setUser({username});
        console.log('user: ', username);
        hash = bcrypt.hashSync(password, saltRounds);
        console.log(hash);
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