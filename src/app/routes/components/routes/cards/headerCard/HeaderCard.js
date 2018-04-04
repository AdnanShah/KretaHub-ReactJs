import React from 'react';
import {Card, CardBody, CardHeader, CardSubtitle, CardText} from 'reactstrap';
import Button from 'material-ui/Button';

const HeaderCard = () => {
    return (
        <Card className="shadow border-0">
            <CardHeader>Features</CardHeader>
            <CardBody>
                <h3 className="card-title">Special Title Treatment</h3>
                <CardSubtitle>A new subheading you can use</CardSubtitle>
                <CardText>
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                    this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                    combined with a handful of model sentence structures,
                </CardText>
                <CardText>
                    making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text,
                </CardText>
                <Button variant="raised" className="btn btn-sm  bg-primary text-white">Go somewhere</Button>
                <Button href="javascript:void(0)" className="btn btn-sm" color="primary">Another Link</Button>
            </CardBody>
        </Card>
    );
};
export default HeaderCard;