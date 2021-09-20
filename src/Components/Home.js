import React from "react";
import { Button, Image, Divider, Header } from "semantic-ui-react";

const Home = () => (
  <div className="home">
    <Divider horizontal>
      <Header as="h4">
        <h1 className="line1"> Welcome to Esti-Mate</h1>
        <Header.Subheader>
          <h2 className="line2">
            The number one tool for repair cost estimation
          </h2>
        </Header.Subheader>
      </Header>
    </Divider>
    <br />
    <Button circular inverted type="submit" as="a" href="/create">
      <Image centered src="./logo.png" alt="logo" />
      Get Started
    </Button>
  </div>
);

export default Home;
