import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu compact>
      <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link} to = "/"
        >
        </Menu.Item>

        <Menu.Item
          name="popular"
          active={activeItem === 'popular'}
          onClick={this.handleItemClick}
          as={Link} to = "/popular"
        >
        </Menu.Item>

        <Menu.Item
          name="developer"
          active={activeItem === 'developer'}
          onClick={this.handleItemClick}
          as={Link} to = "/developer"
        >
        </Menu.Item>
      </Menu>
    );
  }
}
