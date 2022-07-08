import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/MainHome/Home';
function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
