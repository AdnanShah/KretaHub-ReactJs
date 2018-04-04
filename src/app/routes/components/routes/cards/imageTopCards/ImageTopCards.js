import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText} from 'reactstrap';

const ImageTopCards = () => {
    return (

        <Card className="shadow border-0">
            <CardImg top width="100%" src="http://via.placeholder.com/500x330" alt="Card image cap"/>
            <CardBody>
                <h3 className="card-title">Card Title</h3>
                <CardSubtitle>Sub-heading text</CardSubtitle>
                <CardText>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.
                </CardText>
                <CardText className="text-muted">Last modified 2 days ago</CardText>
            </CardBody>
        </Card>

    );
};
export default ImageTopCards;