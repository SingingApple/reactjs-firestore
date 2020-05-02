import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/projects/:id" component={ProjectDetails}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
