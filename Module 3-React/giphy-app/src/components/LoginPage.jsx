import React from 'react';

function LoginPage() {

    const handleLogin = (e) => {
        e.preventDefault();
    }

  return (
    <div>
        <form>
            <label>Username: 
                <input type="text"></input>
            </label>
            <label>Passcode:
                <input type="password"></input>
                <button type="submit" onClick={handleLogin}>Submit</button>
            </label>
        </form>
    </div>
  );
}

export default LoginPage;