import React from "react";
import NavBar from "./Components/Navbar/NavBar.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AccessoriesPage from "./Pages/AccessoriesPage.js";
import TreatsPage from "./Pages/TreatsPage.js";
import HomePage from './Pages/HomePage.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Switch>
          <div>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/Treats">
              <TreatsPage />
            </Route>

            <Route exact path="/Accessories">
              <AccessoriesPage />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// https://barkery-dogs.com/
