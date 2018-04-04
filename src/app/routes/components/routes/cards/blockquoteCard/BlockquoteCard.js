import React from 'react';
import {Card, CardBody} from 'reactstrap';

const BlockquoteCard = () => {
    return (
        <Card className="shadow border-0">
            <CardBody>
                <blockquote className="blockquote mb-0">
                    <p className="mb-2">Donec imperdiet enim et dignissim interdum. Pellentesque in ctetur durabitur cursus vestib.</p>
                    <footer className="blockquote-footer">Quote author with<cite title="Source Title">Source
                        Title</cite></footer>
                </blockquote>
            </CardBody>
        </Card>
    );
};
export default BlockquoteCard;