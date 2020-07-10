import React from 'react';
import Navbar from './Navbar';
import WhiskyList from './features/whiskyList/WhiskyList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <WhiskyList />
          </Route>
          <Route path="/about">
            <div>
              Whisky Collection app.
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
