import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Meals from './Meals';
import Drinks from './Drinks';
import DateAndTime from './Date';
import Summary from './Summary';
import OldMeal from './OldMeal';
import DateAndTimeChange from './DateChange';
import MealsChange from './MealsChange';
import DrinksChange from './DrinksChange';

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
          <Route path="/mealschange" element={<MealsChange />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/drinkschange" element={<DrinksChange />} />
          <Route path="/date" element={<DateAndTime />} />
          <Route path="/datechange" element={<DateAndTimeChange />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/oldmeal" element={<OldMeal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
