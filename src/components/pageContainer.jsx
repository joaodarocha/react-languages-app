import React, { Component } from 'react';
import AppHeader from './appHeader.jsx';
import NavBar from './navBar.jsx';
import { Container } from 'semantic-ui-react';
import CardGrid from './cardGrid';
import ApiError from './api-error';
import getRepos from '../services/apiService';
import LoadingSpinner from './loadig-spinner';
import PaginationMenu from './pagination';

class PageContainer extends Component {
  state = {
    languages: ['All', 'JavaScript', 'Java', 'HTML', 'CSS', 'C', 'C++'],
    repos: [],
    selected: 'JavaScript',
    isLoading: false,
    hasError: false,
    error: {},
    activePage: 1,
    totalPages: 0
  };

  componentDidMount() {
    this.updateRepos(this.state.selected);
  }

  async updateRepos(language, page) {
    if (!page) {
      page = '1';
    }
  
    this.setState({ isLoading: true, hasError: false });

    try {

      const response = await getRepos(language, page);
      const items = response.items;
      this.setState({ isLoading: false, repos: items });

    } catch (error) {

      this.setState({ hasError: true, isLoading: false, error: error });
      console.log('There was an error!');
      console.log(error);
    }
  }

  selectLanguage = async event => {
    const newLanguage = event.target.lang;
    const selectedLanguage = this.state.selected;

    if (selectedLanguage === newLanguage) {
      return;
    }

    this.setState({ selected: newLanguage, activePage: '1' });
    this.updateRepos(newLanguage);
  };

  handlePagination = event => {
    const newPage = event.target.innerText;
    const language = this.state.selected;

    this.setState({ activePage: newPage } );
    console.log('New page => ', newPage);
    this.updateRepos(language, newPage);
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
        <br />
        <PaginationMenu
          activePage={this.state.activePage}
          totalPages={6}
          paginationHandler={this.handlePagination}
        />
        {this.state.isLoading && <LoadingSpinner />}
        {this.state.hasError ? (
          <ApiError error={this.state.error} />
        ) : (
          <CardGrid repos={repos} lang={this.state.selected} activePage={this.state.activePage} />
        )}
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
