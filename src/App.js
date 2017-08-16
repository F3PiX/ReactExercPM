import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/projects'

const projects = [
  {title: "Business Website", category: "Charta"},
  {title: "Strippenkaart", category: "Strp"},
  {title: "Authentication Sterrenlinker", category: "Sterrenscore"},
  {title: "Prez ZonMW", category: "Sterrenscore"}
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: projects
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello Project Manager</h2>
        </div>
        {/*/*end of header*/}
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
