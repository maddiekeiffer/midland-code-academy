import { useState } from 'react';
import useSocketHook from './useSocket';

function App() {
  const { response, sendMessage } = useSocketHook();
  const [message, setMessage] = useState('');

  const submitMessage = () => {
    sendMessage(message);
    setMessage('');
  }

  return (
    <div>
      <ul>
        {response.map((msg) => <li>{msg}</li>)}
      </ul>
      <input value={message}
        onChange={e => setMessage(e.target.value)} />
      <button onClick={() => submitMessage()}>Send</button>      
    </div>
  );
}

export default App;
