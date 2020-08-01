import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes />
        This is a React and Express boilerplate.
      </header>
    </div>
  );
};

export default App;
