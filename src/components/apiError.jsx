import React from 'react';
import '../App.css';

function ApiError(props) {
    const { message } = props;
    // console.log(error);
    return (
        <div className="api-error">
        There was an error fetching data from the API.
            <br />
            Please try again in one minute.
            <div className="error-debugging">
                {message.toString()}
            </div>
        </div>
    );
}

export default ApiError;
