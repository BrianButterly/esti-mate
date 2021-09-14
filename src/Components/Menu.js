import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuNav extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="menu">
            <img className="logo" src="./logo2.png" alt="logo" />
        <Menu>
          <Link to="/">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
          </Link>
          <Link to="/estimates">
            <Menu.Item
              name="estimates"
              active={activeItem === "estimates"}
              onClick={this.handleItemClick}
            >
              Estimates
            </Menu.Item>
          </Link>
          <Link to="/create">
            <Menu.Item
              name="create new estimate"
              active={activeItem === "create new estimate"}
              onClick={this.handleItemClick}
            >
              Create New Estimate
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    );
  }
}
