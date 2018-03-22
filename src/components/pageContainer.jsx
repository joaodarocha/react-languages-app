import React, { Component } from 'react';
import AppHeader from './appHeader.jsx';
import NavBar from './navBar.jsx';
import { Container } from 'semantic-ui-react';
import CardGrid from './cardGrid';
import getRepos from '../services/apiService';


class PageContainer extends Component {
    state = {
        languages: ['All', 'JavaScript', 'Java', 'HTML', 'CSS', 'C', 'C++'],
        repos: [],
        selected: 'JavaScript' 
    };

    async componentDidMount() {
        const data = await getRepos(this.state.selected);
        this.setState({repos: data});
    }

    render() {
        console.log(getRepos('javascript'));
        const {repos} = this.state;
        return (
            <Container>
                <AppHeader />
                <NavBar onClickHandler={this.state.selected}/>
                <CardGrid repos={repos}/>
            </Container>
        );
    }
}

export default PageContainer;
