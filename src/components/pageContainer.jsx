import React, { Component } from 'react';
import AppHeader from './appHeader.jsx';
import NavBar from './navBar.jsx';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import CardGrid from './cardGrid';
import getRepos from '../services/apiService';

class PageContainer extends Component {
  state = {
    languages: ['All', 'JavaScript', 'Java', 'HTML', 'CSS', 'C', 'C++'],
    repos: [],
    selected: 'JavaScript',
    isLoading: false
  };

  async componentDidMount() {
    this.updateRepos(this.state.selected);
  }

  async updateRepos(language) {
    this.setState({ isLoading: true });
    const data = await getRepos(language);

    this.setState({ isLoading: false });
    this.setState({ repos: data });
  }

  selectLanguage = async (event) => {
    console.log('Event.target.lang is => ', event.target.lang);
    const newLanguage = event.target.lang;
    const selectedLanguage = this.state.selected;

    if (selectedLanguage === newLanguage) {
      return;
    }

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
        {this.state.isLoading && (
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
