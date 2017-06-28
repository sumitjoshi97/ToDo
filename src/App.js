import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Todo from './containers/Todo';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <Todo />
        <Footer/>
      </div>
    );
  }
}

export default App;
