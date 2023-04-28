import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';
import Button from '../styled/elements/Button';
import Input from '../styled/elements/Input';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useUserContext();

    const handleLogin = (e) => {
        e.preventDefault();
        setUser({username});
        console.log('user: ', username);
    }

  return (
    <div>
        <form>
            <label>Username: 
                <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
            </label>
            <label>Passcode:
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                <Button type="submit" onClick={handleLogin}>Submit</Button>
            </label>
        </form>
    </div>
  );
}

export default LoginPage;