import React, { Component } from "react";
import "./components/css/App.css"
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          CV Form (React)
        </header>
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
