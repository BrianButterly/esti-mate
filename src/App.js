import React from "react";
import "./App.css";
import MenuNav from "./Components/Menu";
import Home from "./Components/Home"
import Estimates from "./Components/Estimates";
import Create from "./Components/Create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.css";

function App() {
  return (
    <div className="App">
      <Router>
        <MenuNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/estimates" component={Estimates} />
          <Route path="/create" component={Create} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
