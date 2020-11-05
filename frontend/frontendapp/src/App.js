import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import Docs from './components/docs';

function App() {

  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
  }

  return (
    <div className="App">
      <Login userLogin={userLogin}/>
      <Docs token={token}/>
    </div>
  );
}

export default App;
