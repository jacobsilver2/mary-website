import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Works from './Works';
import SideNotes from './Sidenotes';
import About from './About';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Works}/>
          <Route path="/sidenotes" component={SideNotes} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
