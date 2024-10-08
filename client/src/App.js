import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

const [data, setData] = useState(null);
console.log(process.env);
useEffect(() => {
  fetch(`${process.env.REACT_APP_API_ENDPOINT}/api`).then(res => res.json()).then(resData => setData(resData.message));
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {data}
        </a>
      </header>
    </div>
  );
}

export default App;
