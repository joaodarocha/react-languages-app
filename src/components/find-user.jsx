import React, { Component } from 'react';
import { Input, Button, Grid, Header, Icon } from 'semantic-ui-react';
import CardItem from './cardItem';
import { getUser } from '../services/apiService';

class FindUser extends Component {
  state = {
    inputText: '',
    image: '',
    login: '',
    name: '',
    watchers: '',
    html_url: ''
  };

  handleChange = event => {
    this.setState({ inputText: event.target.value });
  };

  handleSubmit = async event => {
    const user = await this.searchUser(this.state.inputText);

    this.setState({
      image: user.avatar_url,
      login: user.login,
      name: user.name,
      watchers: user.followers,
      html_url: user.html_url
    });
  };

  async searchUser(username) {

    try {

      const response = await getUser(username);
      const data = response.data;
      return data;

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { image, login, name, watchers, html_url } = this.state;

    return (
      <div>
        <Header as="h1" icon>
            <Icon name="github" />
            Find GitHub User
        </Header>
        <Grid columns="1" centered>
          <Grid.Row>
            <Input placeholder="Search..." onChange={this.handleChange} />
            <Button onClick={this.handleSubmit}>Search...</Button>
          </Grid.Row>
          { this.state.login &&
          <Grid.Row>
            <CardItem
              login={login}
              image={image}
              name={name}
              watchers={watchers}
              html_url={html_url}
            />
          </Grid.Row>}
        </Grid>
      </div>
    );
  }
}

export default FindUser;
