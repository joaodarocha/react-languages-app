import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import '../App.css';

function AppHeader(props) {
    const { icon, title, subtitle } = props;

    return (
        <Header as="h1" icon>
            <Icon name={ icon } />
            { title }
            <Header.Subheader>
                { subtitle }
            </Header.Subheader>
        </Header>
    );
}

export default AppHeader;
