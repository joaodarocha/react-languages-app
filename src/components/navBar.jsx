import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ButtonItem from './buttonItem.jsx';

class NavBar extends Component {
  static languages = ['All', 'JavaScript', 'Java', 'HTML', 'CSS', 'C', 'C++'];
  state = { selected: 'All' };


  render() {
    let {languages, active} = this.props;
    return (
      <Button.Group  className="navbar">
        {languages.map(lang => {

          return (
            <ButtonItem
              active={active}
              lang={lang}
              onClickHandler={this.props.onClickNav}
              key={lang}
              item={lang}
            />
          );
        })}
      </Button.Group>
    );
  }
}

export default NavBar;
