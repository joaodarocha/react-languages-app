import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import CardItem from './cardItem.jsx';
import '../App.css';

class CardGrid extends Component {
    render() {
        const { repos, activePage } = this.props;

        return (
            <Grid columns="six" stretched>
                <Grid.Row>
                    {repos.map((repo, index) => {
                        return (
                            <Grid.Column key={repo.id}>
                                <CardItem
                                    index={index + 1}
                                    activePage={activePage}
                                    image={repo.owner.avatar_url}
                                    login={repo.owner.login}
                                    name={repo.name}
                                    html_url={repo.html_url}
                                >


                                    <div className="stars-numbers">
                                        <span className="stars-text">
                                            <Icon name="star" />
                                            {repo.watchers} Stars
                                        </span>
                                    </div>




                                </CardItem>
                            </Grid.Column>
                        );
                    })}
                </Grid.Row>
            </Grid>
        );
    }
}

export default CardGrid;
