import Airlines from "./Airlines";
import Login from "./Login";
import Flight from "./Flight";
import { Link, Route, Routes } from "react-router-dom";
import React, { Component, useState } from "react";


function App() {
    const adminUser = {
      email: 'jonesy@ga.co',
      password: 'chicken',
      // flightToDisplay: {}
    }

    // DUMMY FLIGHT DATA
    const dummyFlight = {"id":13,"flight_number":"FLIGHT69","date":"12/12/1998","to":"Croatia","from":"Finland","plane_id":13,"created_at":"2022-08-10T05:25:19.749Z","updated_at":"2022-08-10T05:25:19.844Z","url":"http://localhost:3000/flights/13.json"};

    const [user, setUser] = useState({password:'', email:''});
    const [error, setError] = useState('');

    const Log_in = details => {
      console.log(details);
    }
    const Logout = () => {
      console.log('Logout')
    }

  return (
  <div>
    <nav>
      <Link to="/">Home</Link>
      ||
      <Link to="/airlines">Airlines</Link>
      ||
      <Link to="/flight">Flight</Link>
      ||
      <Link to="/Login">Login</Link>
    </nav>
    <h1>ಥ_ಥ Nothing to see here apparently ಥ_ಥ</h1>
    <Routes>
      <Route path="/airlines" element={<Airlines />}/>
      <Route path="/flight" element={<Flight flight={dummyFlight} />} /> {/* REPLACE WITH ACTUAL FLIGHT*/}
      <Route path="/Login" element ={<Login onSubmit={Log_in}/>} />
    </Routes>
{/* 
    <div className="App">
      {(user.email !='') ? (
        <div className="welcome">
          <h2>Welcome, <span>{ user.name }</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <Login Log_in={ Log_in } error={ error }/>
      )}
    </div> */}
    </div>
  );
}

export default App;
