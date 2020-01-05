import React from 'react';
import './App.css';
import './App.scss';
import {BrowserRouter as Router , Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import FilterPage from './components/FilterPage';

const App = () => (
  <Router>
    <Route  exact path='/' component={Home}></Route>
    <Route  path='/to-help' component={FilterPage}></Route>
  </Router>
)

export default App;
