import Airlines from "./Airlines";
import Login from "./Login";
import Flight from "./Flight";
import { Link, Route, Routes } from "react-router-dom";

function App() {
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
      <Route path="/flight" element={<Flight />} />
      <Route path="/Login" element ={<Login />} />

    </Routes>
  </div>
  );
}

export default App;
