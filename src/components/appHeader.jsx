import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import '../App.css';

function AppHeader(props) {
    return (
        <Header as="h1" icon>
            <Icon name="comments" />
            Languages App
            <Header.Subheader>
            Select one language to see the most popular repositories on GitHub
            </Header.Subheader>
        </Header>
    );
}

export default AppHeader;
