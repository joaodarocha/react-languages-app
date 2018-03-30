import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import CardItem from './cardItem.jsx';
import '../App.css';

class CardGrid extends Component {
    render() {
        const { repos } = this.props;

        return (
            <Grid columns="six" >
                <Grid.Row>
                    {repos.map( (repo, index) => {
                        return (
                            <Grid.Column key={repo.id}>
                                <CardItem
                                    index={index+1}
                                    image={repo.owner.avatar_url}
                                    login={repo.owner.login}
                                    name={repo.name}
                                    watchers={repo.watchers}
                                    html_url={repo.html_url}
                                    
                                />
                            </Grid.Column>
                        );
                    })}
                </Grid.Row>
            </Grid>
        );
    }
}

export default CardGrid;
