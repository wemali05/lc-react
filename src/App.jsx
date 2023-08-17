import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Another from './Another';

function App() {
  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
    padding: '8px'
  }

  const [count, setCount] = useState(0);

  let decreament = () => {
    setCount(count - 1)
  }

  let increament = () => {
    setCount(count + 1)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Another name="Alfred Wemali N"/>
        <div>
          <span style={someStyle}>{ count }</span>
          <button onClick={decreament}>-</button>
          <button onClick={increament}>+</button>
        </div>
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
    </div>
  );
}

export default App;
