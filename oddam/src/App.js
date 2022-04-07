import React from "react";
import './scss/main.scss';
import Home from "./components/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
    Switch
} from "react-router-dom";


function App() {
  return (

      <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Home />} />
        </Routes>


      </Router>


  );
}

export default App;
