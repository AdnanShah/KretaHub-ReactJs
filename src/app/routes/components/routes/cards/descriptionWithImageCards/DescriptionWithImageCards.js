import React from 'react';
import {Card, CardBody, CardImg, CardText} from 'reactstrap';

const DescriptionWithImageCards = () => {
    return (
        <Card className="shadow border-0">
            <CardImg top width="100%" src="http://via.placeholder.com/500x330" alt="Card image cap"/>
            <CardBody>
                <CardText>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters.
                </CardText>
                <CardText>
                    making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text,
                </CardText>
            </CardBody>
        </Card>
    );
};
export default DescriptionWithImageCards;