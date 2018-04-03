import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
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
        console.log(event.target.value);
        this.setState({ inputText: event.target.value });
       
    };

    handleSubmit = (event) => { 
        console.log("Handling Submit..!");
        event.persist();
        console.log('InputText is => ', this.state.inputText);
        const user = this.searchUser(this.state.inputText);
        this.setState({
            image: user.avatar_url,
            login: user.login,
            name: user.name,
            watchers: user.followers,
            html_url: user.html_url
        })
    };

    async searchUser(username) {
        try {
            const response = await getUser(username);
            const data = response.data;
            console.log("Got this user => ", data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    render() {
    const { image, login, name, watchers, html_url } = this.state;
    // console.log("state is => ", this.state);

        return (
            <div>
                <h2> Find GitHub User</h2>
                <Input 
                    placeholder="Search..." 
                    onChange={this.handleChange}
                    >
                </Input>
                <Button onClick={this.handleSubmit}>Search...</Button>
                <CardItem 
                    index={1}
                    activePage={1}
                    /* login={login}
                    image={image}
                    name={name}
                    watchers={watchers}
                    html_url={html_url} */
                    login="joaodarocha"
                    image="https://avatars3.githubusercontent.com/u/27374026?v=4"
                    name="João da Rocha"
                    watchers={2}
                    html_url="https://github.com/joaodarocha"

                ></CardItem>
            </div>
        );
    }
}

export default FindUser;