/* eslint-disable react/jsx-no-undef */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../JS/Home';
import Navbar from '../JS/Navbar';
import About from '../JS/About';
import Contact from '../JS/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
