import React from 'react';
import {Card, CardBody, CardSubtitle, CardText} from 'reactstrap';
import Button from 'material-ui/Button';

const TitleCards = () => {
    return (
        <Card className="shadow border-0">
            <CardBody>
                <h3 className="card-title">Card title</h3>
                <CardSubtitle>Only Title, Text and Links</CardSubtitle>
                <CardText>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                    Cicero are also 1914 translation by H.
                    Rackham.
                </CardText>
            </CardBody>

            <div className="card-mt-footer">
                <Button href="javascript:void(0)" className="btn btn-sm" color="primary">Card Link</Button>
                <Button href="javascript:void(0)" className="btn btn-sm" color="primary">Another Link</Button>
            </div>
        </Card>
    );
};
export default TitleCards;