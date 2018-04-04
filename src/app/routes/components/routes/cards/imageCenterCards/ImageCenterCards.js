import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText} from 'reactstrap';

const ImageCenterCards = () => {
    return (
        <Card className="shadow border-0">
            <CardBody>
                <h3 className="card-title">Card Title</h3>
                <CardSubtitle>Sub-heading text</CardSubtitle>
            </CardBody>
            <CardImg className="rounded-0" width="100%" src="http://via.placeholder.com/500x330"
                     alt="Card image cap"/>
            <CardBody>
                <CardText>
                    Small plates, salads & sandwiches in an
                    intimate setting with 12 indoor seats plus
                    patio seating
                </CardText>
                <CardText className="text-muted">Last modified 2 days ago</CardText>
            </CardBody>
        </Card>
    );
};
export default ImageCenterCards;