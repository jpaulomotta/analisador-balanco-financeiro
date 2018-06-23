import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/*Icons*/
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

/*Routes*/
import Home from './pages/Home'
import Analisador from './pages/Analisador' 

library.add(faCheck, faTimes)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/analisador" component={Analisador} />
        </div>
      </Router>
    );
  }
}

export default App;
