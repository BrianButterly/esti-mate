import React from "react";
import { Button, Image } from "semantic-ui-react";

const Home = () => (
  <div>
    <h1 className="line1">Welcome to Esti-Mate</h1>
    <h2 className="line2">The number one tool for repair estimation</h2>
    <br />
    <Button circular inverted type="submit" as="a" href="/create">
      <Image centered src="./logo.png" alt="logo" />
      Get Started
    </Button>
  </div>
);

export default Home;
