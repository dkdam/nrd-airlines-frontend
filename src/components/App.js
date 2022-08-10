import React, { Component, useState } from "react";
import Login from "./Login";

function App() {
    const adminUser = {
      email: 'jonesy@ga.co',
      password: 'chicken'
    }

    const [user, setUser] = useState({name:'', email:''});
    const [error, setError] = useState('');

    const Log_in = details => {
      console.log(details);
    }
    const Logout = () => {
      console.log('Logout')
    }

  return (
    <div className="App">
      {(user.email !='') ? (
        <div className="welcome">
          <h2>Welcome, <span>{ user.name }</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <Login Log_in={ Log_in } error={ error }/>
      )}
    </div>
  );
}

export default App;
