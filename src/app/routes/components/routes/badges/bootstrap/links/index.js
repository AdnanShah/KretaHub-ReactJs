import React from 'react';
import {Badge} from 'reactstrap';

export default class Links extends React.Component {
    render() {
        return (
            <div className="badge-group">
                <Badge href="javascript:void(0)" color="primary">Primary</Badge>
                <Badge href="javascript:void(0)" color="secondary">Secondary</Badge>
                <Badge href="javascript:void(0)" color="success">Success</Badge>
                <Badge href="javascript:void(0)" color="danger">Danger</Badge>
                <Badge href="javascript:void(0)" color="warning">Warning</Badge>
                <Badge href="javascript:void(0)" color="info">Info</Badge>
                <Badge href="javascript:void(0)" color="light">Light</Badge>
                <Badge href="javascript:void(0)" color="dark">Dark</Badge>
            </div>
        );
    }
}