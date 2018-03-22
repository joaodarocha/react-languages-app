import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ButtonItem from './buttonItem.jsx';

class ButtonContainer extends Component {
  static languages = ['All', 'JavaScript', 'Java', 'HTML', 'CSS', 'C', 'C++'];
  state = { selected: 'All' };

  selectLanguage(lang) {
    // event.persist();
    // console.log(event);
    console.log(lang);
    this.setState({ selected: lang });
  }

  render() {
    return (
      <Button.Group>
        {ButtonContainer.languages.map(lang => {
          // let color = lang === this.state.selected ? 'green' : 'grey';
          let active = (lang === this.state.selected);

          return (
            <ButtonItem
              // color={color}
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

export default ButtonContainer;
