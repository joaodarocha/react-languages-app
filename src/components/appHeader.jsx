import React from 'react';
import '../App.css';

function AppHeader(props) {
    return <div className="App-header">{props.children}</div>;
}

export default AppHeader;
