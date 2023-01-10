import React, { Component } from 'react';
import Editor from './components/editor';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Editor />
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;