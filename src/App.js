
import React, { Component } from 'react';
import Main from "./components/MainComponent"
import { BrowserRouter } from 'react-router-dom';//Browser ROuter is imported here. Used to route to diffent oages of your app/website
import './App.css';//App.css is being imported here


class App extends Component { 
  render() {
      return (
          <BrowserRouter>
              <div className="App">
                  <Main />
              </div>
          </BrowserRouter>
      );
  }
}

export default App;
