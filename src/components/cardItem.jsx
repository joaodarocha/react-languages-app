import React, { Component } from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
// import mockRepo from './mocks/mockRepo';

class CardItem extends Component {


    render() {
        const {
            index, 
            activePage, 
            image, 
            login, 
            name, 
            html_url, 
            children} = this.props;

        return (
            <Card>
                <Image src={image} size='medium' circular />
                <Card.Content>
                    { index && <Label attached="top left">#{index + 30 * (activePage - 1)}</Label>}
                    <Card.Header>{login}</Card.Header>
                    <Card.Description className="card-description" href={html_url}>{name}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    {children}
                </Card.Content>
            </Card>
        );
    }
}

export default CardItem;
