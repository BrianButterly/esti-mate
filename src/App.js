import React from "react";
import "./App.css";
import MenuNav from "./Components/Menu";
import Estimates from "./Components/Estimates";
import Create from "./Components/Create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/estimates" component={Estimates} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
