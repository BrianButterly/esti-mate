import React from "react";
import "./App.css";
import MenuNav from "./Components/Menu";
import Estimates from "./Components/Estimates";
import Create from "./Components/Create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  {Button} from "semantic-ui-react/";


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
    <h1>Welcome to Esti-Mate</h1>
    <h2>The number one tool for repair estimation</h2><br/>
    <Button inverted type="submit" as="a" href='/create'>Create New Estimate</Button>
  </div>
);

export default App;
