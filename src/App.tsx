import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Projects, Team } from "./components";
// import "./App.css";

function App() {
  console.log("hi");
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/team" component={Team} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
