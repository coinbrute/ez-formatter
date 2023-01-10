import React, { Component } from 'react';
import Xml2Json from './components/xml2json';
import Footer from './components/footer';
import './App.css';
import Xml2Json from './components/xml2json';

class App extends Component {
  render() {
    return (
      <div>
        <Xml2Json />
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;