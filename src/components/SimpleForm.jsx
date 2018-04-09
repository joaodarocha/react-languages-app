import React from 'react';
import { Button } from 'semantic-ui-react';

class SimpleForm extends React.Component {
  state = { text: '' };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = () => {
    // do something with this.state.text
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Sign up</button>
      </div>
    );
  }
}
export default SimpleForm;