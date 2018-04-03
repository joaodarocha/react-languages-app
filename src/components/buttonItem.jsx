import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonItem(props) {
    let color = (props.active === props.lang) ? 'green' : '';

    return (
        <Button
            className={color}
            lang={props.lang}
            onClick={props.onClickHandler}
        >
            {props.lang}
        </Button>
    );
}

export default ButtonItem;
