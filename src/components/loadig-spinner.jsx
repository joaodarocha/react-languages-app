import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import '../App.css';

function LoadingSpinner() {
    return (
        <Dimmer active inverted className="loading-spinner">
            <Loader inverted>Loading</Loader>
        </Dimmer>
    );
}

export default LoadingSpinner;
