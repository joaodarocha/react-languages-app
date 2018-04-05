import React, { Component } from 'react';
import {
    Input,
    Button,
    Icon,
    Statistic
} from 'semantic-ui-react';
import AppHeader from './appHeader.jsx';
import CardItem from './cardItem';
import { getUser } from '../services/apiService';
import MenuBar from './menuBar.jsx';

class Developer extends Component {
    state = {
        inputText: '',
        user: {
            image: '',
            login: '',
            name: '',
            watchers: '',
            html_url: '',
            repos: '',
            error: {}
        }
    };

    handleChange = event => {
        this.setState({ inputText: event.target.value });
    };

    handleSubmit = async event => {
        let user = {};
        try {
            user = await this.searchUser(this.state.inputText);
        } catch (error) {
            console.log('There was an Error => ', error);
            this.setState({ error: error });
            return;
        }
        this.setState({
            user: {
                image: user.avatar_url,
                login: user.login,
                name: user.name,
                watchers: user.followers,
                html_url: user.html_url,
                repos: user.public_repos
            }
        });
    };

    async searchUser(username) {
        try {
            const response = await getUser(username);
            const data = response.data;

            return data ? data : new Error('There was an Error');
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const {
            image,
            login,
            name,
            watchers,
            html_url,
            repos,
            error
        } = this.state.user;

        return (
            <div>
                <MenuBar />
                <AppHeader
                    icon="github"
                    title="Find GitHub User"
                    subtitle=" "
                />
                <Input placeholder="Search..." onChange={this.handleChange} />
                <Button onClick={this.handleSubmit}>Search...</Button>
                {this.state.error && error}
                {this.state.user.login && (
                    <CardItem
                        login={login}
                        image={image}
                        name={name}
                        html_url={html_url}
                    >
                        <Statistic.Group>
                            <Statistic size="mini">
                                <Statistic.Value>{watchers}</Statistic.Value>
                                <Statistic.Label>
                                    <Icon name="spy" large></Icon>
                                    Followers
                                </Statistic.Label>
                            </Statistic>
                            <Statistic size="mini">
                                <Statistic.Value>{repos}</Statistic.Value>
                                <Statistic.Label>
                                    <Icon name="github square" large></Icon>
                                    Repos
                                </Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </CardItem>
                )}
            </div>
        );
    }
}

export default Developer;
