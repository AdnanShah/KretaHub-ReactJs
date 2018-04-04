import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText} from 'reactstrap';

const ImageBottomCards = () => {
    return (
        <Card className="shadow border-0">
            <CardBody>
                <h3 className="card-title">Card Title</h3>
                <CardSubtitle>Sub-heading text</CardSubtitle>
                <CardText>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, look even slightly believable.
                </CardText>
                <CardText className="text-muted">Last modified 2 days ago</CardText>
            </CardBody>
            <CardImg bottom width="100%" src="http://via.placeholder.com/500x330" alt="Card image cap"/>
        </Card>
    );
};
export default ImageBottomCards;