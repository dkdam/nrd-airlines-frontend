import Airlines from "./Airlines";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
  <div>
    <nav>
      <Link to="/">Home</Link>
      ||
      <Link to="/airlines">Airlines</Link>
    </nav>
    <h1>Nothing to see here apparently</h1>
    <Routes>
      <Route path="/airlines" element={<Airlines />}/>
    </Routes>
  </div>
  );
}

export default App;
