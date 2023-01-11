import React, { Component } from 'react';
// import { createBrowserHistory } from "history";
import X2J from './components/X2J';
import J2X from './components/J2X';
import Home from './components/home';
import Footer from './components/footer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/xml2json" component={X2J} /> 
              <Route path="/json2xml" component={J2X} />
            </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;