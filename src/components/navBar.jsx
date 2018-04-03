import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import ButtonItem from './buttonItem.jsx';

class NavBar extends Component {

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
                        />
                    );
                })}
            </Button.Group>
        );
    }
}

export default NavBar;
