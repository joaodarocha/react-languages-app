import React, { Component } from 'react';
import AppHeader from './appHeader.jsx';
import NavBar from './navBar.jsx';
import { Container, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import CardGrid from './cardGrid';
import getRepos from '../services/apiService';

class PageContainer extends Component {
  state = {
    languages: ['All', 'JavaScript', 'Java', 'HTML', 'CSS', 'C', 'C++'],
    repos: [],
    selected: 'JavaScript',
    loading: false
  };

  async componentDidMount() {
    this.updateRepos(this.state.selected);
  }

  async updateRepos(language) {
    this.setState({ loading: true });
    const data = await getRepos(language);

    this.setState({ loading: false });
    this.setState({ repos: data });
  }

  selectLanguage = async event => {
    console.log('Event.target.lang is => ', event.target.lang);
    this.setState({ selected: event.target.lang });
    this.updateRepos(event.target.lang);
  };

  render() {
    const { repos } = this.state;
    return (
      <Container>
        <AppHeader />
        <NavBar
          languages={this.state.languages}
          active={this.state.selected}
          onClickNav={this.selectLanguage}
        />
        {this.state.loading && (
          <Dimmer active inverted className="loading-spinner">
            <Loader inverted>Loading</Loader>
          </Dimmer>
        )}
        <CardGrid repos={repos} lang={this.state.selected} />
      </Container>
    );
  }
}

export default PageContainer;

/* 
Tratamento de erros:
Sem acesso à Internet
Deu timetout
Deu erro ao fazer o fetch

Improvements:
Quando está a carregar aparecer o "Loading.." 
*/
