import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Meals from './Meals';
import Drinks from './Drinks';
import DateAndTime from './Date';
import Summary from './Summary';

function App() {
  return (
    <Router>
      <div className="App">
        <br />
        <Header />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/date" element={<DateAndTime />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
