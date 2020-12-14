import React from 'react'
import './App.css';
import Navbar from "./components/universal/MainNavbar"
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nature from './components/categories/Nature';
import People from './components/categories/People';
import Architecture from './components/categories/Architecture';
import Experimental from './components/categories/Experimental';
import Fashion from './components/categories/Fashion';
import Film from './components/categories/Film';


function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>

          <Route path="/nature">
            <Nature />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/architecture">
            <Architecture />
          </Route>
          <Route path="/experimental">
            <Experimental/>
          </Route>
          <Route path="/fashion">
            <Fashion/>
          </Route>
          <Route path="/film">
            <Film/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
