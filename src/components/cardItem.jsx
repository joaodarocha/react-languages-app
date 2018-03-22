import React, { Component } from 'react';
import { Card, Icon, Image, Label } from 'semantic-ui-react';

class CardItem extends Component {


    render() {
        const {index, image, login, name, watchers} = this.props;

        return (
            <Card>
                <Image src={image} size='medium' circular />
                <Card.Content>
                    {/* <Label attached="top left">#{mockRepo.items[0].index}</Label> */}
                    <Label attached="top left">#{index}</Label>
                    <Card.Header>{login}</Card.Header>
                    <Card.Description>{name}</Card.Description>
                </Card.Content>
                <Card.Content className="stars-numbers" extra>
                    <a>
                        <Icon name="star" />
                        {watchers} Stars
                    </a>
                </Card.Content>
            </Card>
        );
    }
}

export default CardItem;
