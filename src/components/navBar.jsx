import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ButtonItem from './buttonItem.jsx';

class NavBar extends Component {
  static languages = ['All', 'JavaScript', 'Java', 'HTML', 'CSS', 'C', 'C++'];
  state = { selected: 'All' };

  selectLanguage(lang) {
    this.setState({ selected: lang });
  }

  render() {
    return (
      <Button.Group  className="navbar">
        {NavBar.languages.map(lang => {
          let active = lang === this.state.selected;

          return (
            <ButtonItem
              active={active}
              lang={lang}
              clickHandler={() => this.selectLanguage(lang)}
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
