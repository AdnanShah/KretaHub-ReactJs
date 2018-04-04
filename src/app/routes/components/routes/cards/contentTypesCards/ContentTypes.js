import React from 'react';
import {Card, CardBody, CardText} from 'reactstrap';
import Button from 'material-ui/Button';

const ContentTypes = () => {
    return (
        <Card className="shadow border-0">
            <CardBody>
                <h3 className="card-title">Card Title</h3>
                <CardText>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </CardText>
            </CardBody>
            <div className="card-mt-footer">
                <Button href="javascript:void(0)" className="btn text-uppercase btn-sm" color="primary">YES</Button>
                <Button href="javascript:void(0)" className="btn text-uppercase btn-sm" color="primary">NO</Button>
            </div>
        </Card>
    );
};
export default ContentTypes;