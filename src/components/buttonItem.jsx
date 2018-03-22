import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonItem(props) {
    let color = (props.active) ? 'green' : '';

  return (
    <Button className={color} active={props.active} /* color={props.color} */ onClick={props.clickHandler}>
      {props.item}
    </Button>
  );
}

export default ButtonItem;
