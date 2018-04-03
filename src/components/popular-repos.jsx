import React, { Component } from 'react';
import AppHeader from './appHeader.jsx';
import NavBar from './navBar.jsx';
import { Container } from 'semantic-ui-react';
import CardGrid from './cardGrid';
import ApiError from './api-error';
import getRepos from '../services/apiService';
import LoadingSpinner from './loadig-spinner';
import PaginationMenu from './pagination';

class PopularRepos extends Component {
  state = {
    languages: ['All', 'JavaScript', 'Java', 'HTML', 'CSS', 'C', 'Ruby'],
    repos: [],
    selectedLanguage: 'JavaScript',
    isLoading: false,
    hasError: false,
    error: {},
    activePage: 1,
    totalPages: 0
  };

  componentDidMount() {
    this.updateRepos(this.state.selectedLanguage);
  }

  async updateRepos(language, page) {
    if (!page) {
      page = '1';
    }
  
    this.setState({ isLoading: true, hasError: false });

    try {

      const response = await getRepos(language, page);
      console.log('Response => ', response);
      const items = response.data.items;
      const totalPages = 20; 
      // const totalPages = (response.total_count / 30)|0;
      // console.log('totalPages =>', totalPages );
      this.setState({ 
        isLoading: false, 
        repos: items, 
        totalPages: totalPages 
      });

    } catch (error) {

      this.setState({ 
        hasError: true, 
        isLoading: false, 
        error: error 
      });
      console.log('There was an error!');
      console.log(error);
    }
  }

  selectLanguage = async event => {
    const newLanguage = event.target.lang;
    const selectedLanguage = this.state.selectedLanguage;

    if (selectedLanguage === newLanguage) {
      return;
    }

    this.setState({ 
      selectedLanguage: newLanguage, 
      activePage: '1' 
    });
    this.updateRepos(newLanguage);
  };

  handlePagination = event => {
    const newPage = event.target.innerText;
    const language = this.state.selectedLanguage;

    this.setState({ activePage: newPage } );
    // console.log('New page => ', newPage);
    this.updateRepos(language, newPage);
  };

  render() {
    const { repos, totalPages, activePage, selectedLanguage, isLoading, hasError, error } = this.state;

    
    return (
      <Container>
        <AppHeader />
        <NavBar
          languages={this.state.languages}
          active={this.state.selectedLanguage}
          onClickNav={this.selectLanguage}
        />
        <br />
        <PaginationMenu
          activePage={activePage}
          totalPages={totalPages}
          paginationHandler={this.handlePagination}
        />
        {isLoading && <LoadingSpinner />}

        {hasError ? (
          <ApiError error={error} />
        ) : (
          <CardGrid repos={repos} 
                    lang={selectedLanguage} 
                    activePage={activePage} />
        )}
      </Container>
    );
  }
}

export default PopularRepos;

/* 
Tratamento de erros:
Sem acesso à Internet
Deu timetout
Deu erro ao fazer o fetch

Improvements:
Quando está a carregar aparecer o "Loading.." 
*/
