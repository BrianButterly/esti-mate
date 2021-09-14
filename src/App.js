import React from "react";
import "./App.css";
import MenuNav from "./Components/Menu";
import Estimates from "./Components/Estimates";
import Create from "./Components/Create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Button, Image} from "semantic-ui-react/";


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
    <h1 className="line1">Welcome to Esti-Mate</h1>
    <h2 className="line2">The number one tool for repair estimation</h2><br/>
    <Button circular inverted type="submit" as="a" href='/create'><Image centered src="./logo.png" alt="logo" />Get Started</Button>
  </div>
);

export default App;
