import React from 'react';
import {Card, CardBody, CardSubtitle, CardText} from 'reactstrap';

const SolidCards = ({headerText, cardStyle}) => {
    return (

        <Card className={`shadow border-0 ${cardStyle}`}>
            <CardBody>
                <h4 className="mb-md-4">{headerText}</h4>
                <h3 className="card-title">Card Title</h3>
                <CardSubtitle className="text-white">Sub-heading text</CardSubtitle>
                <CardText>
                    Small plates, salads & sandwiches in an
                    intimate setting with 12 indoor seats plus
                    patio seating
                </CardText>
                <CardText>Last modified 2 days ago</CardText>
            </CardBody>
        </Card>

    );
};
export default SolidCards;