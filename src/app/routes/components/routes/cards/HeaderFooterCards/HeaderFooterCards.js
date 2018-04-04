import React from 'react';
import {Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText} from 'reactstrap';

const HeaderFooterCards = ({cardHeader, cardStyle}) => {
    return (
        <Card className={`shadow border-0 ${cardStyle}`}>
            <CardHeader className="bg-primary text-white">{cardHeader}</CardHeader>
            <CardBody>
                <h3 className="card-title">Card Title</h3>
                <CardSubtitle>Sub-heading text</CardSubtitle>
                <CardText>
                    Small plates, salads & sandwiches in an
                    intimate setting with 12 indoor seats plus
                    patio seating
                </CardText>
                <CardText>
                    Donec imperdiet enim et dignissim interdum. Pellentesque in ortti tor elit. Curabitur
                    consectetur.
                </CardText>
            </CardBody>
            <CardFooter>2 days ago</CardFooter>
        </Card>
    );
};
export default HeaderFooterCards;