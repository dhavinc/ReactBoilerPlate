import React, { Component} from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello Dhia! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
