import React, { Component } from 'react';
import AppHeader from './appHeader.jsx';
import NavBar from './navBar.jsx';
import { Container } from 'semantic-ui-react';
import CardGrid from './cardGrid';
import ApiError from './api-error';
import getRepos from '../services/apiService';
import LoadingSpinner from './loadig-spinner';

class PageContainer extends Component {
  state = {
    languages: ['All', 'JavaScript', 'Java', 'HTML', 'CSS', 'C', 'C++'],
    repos: [],
    selected: 'JavaScript',
    isLoading: false,
    hasError: false,
    error: {}
  };

  async componentDidMount() {
    this.updateRepos(this.state.selected);
  }

  async updateRepos(language) {
    this.setState({ isLoading: true, hasError: false });

    try {
      
      const data = await getRepos(language);
      this.setState({ isLoading: false, repos: data });

    } catch (error) {

      this.setState({ hasError: true, isLoading: false, error: error});
      console.log('There was an error!');
      console.log(error);
    }
  }

  selectLanguage = async event => {
    // console.log('Event.target.lang is => ', event.target.lang);
    const newLanguage = event.target.lang;
    const selectedLanguage = this.state.selected;

    if (selectedLanguage === newLanguage) {
      return;
    }

    this.setState({ selected: newLanguage });
    this.updateRepos(newLanguage);
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
        {this.state.isLoading && <LoadingSpinner />}
        {this.state.hasError ? <ApiError error={this.state.error} ></ApiError> : <CardGrid repos={repos} lang={this.state.selected} />}
      </Container>
    );
  }
}

export default PageContainer;

/* 
        <CardGrid repos={repos} lang={this.state.selected} />
        <ApiError></ApiError>
Tratamento de erros:
Sem acesso à Internet
Deu timetout
Deu erro ao fazer o fetch

Improvements:
Quando está a carregar aparecer o "Loading.." 
*/
