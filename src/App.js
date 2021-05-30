import React, { useState, useEffect } from 'react'
import api from './Api'
import logo from './logo.svg';
import './App.css';

const App= () => {
  const [text, setText] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    api.get('/hello_world')
    .then(response => {
      setText(response.data.text)
      setLoaded(true)
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {loaded && text}
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
