import React, { Component } from 'react';
import { Card, Icon, Image, Label } from 'semantic-ui-react';

class CardItem extends Component {


    render() {
        const {index, activePage, image, login, name, watchers, html_url} = this.props;

        return (
            <Card>
                <Image src={image} size='medium' circular />
                <Card.Content>
                    {/* <Label attached="top left">#{mockRepo.items[0].index}</Label> */}
                    <Label attached="top left">#{index + (30 * activePage) - 30}</Label>
                    <Card.Header>{login}</Card.Header>
                    <Card.Description className="card-description" href={html_url}>{name}</Card.Description>
                </Card.Content>
                <Card.Content className="stars-numbers" extra>
                    <span className="stars-text">
                        <Icon name="star" />
                        {watchers} Stars
                    </span>
                </Card.Content>
            </Card>
        );
    }
}

export default CardItem;
