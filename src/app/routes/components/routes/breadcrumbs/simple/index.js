import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

const Simple = () => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
                <BreadcrumbItem><a href="javascript:void(0)">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb className="mb-0">
                <BreadcrumbItem><a href="javascript:void(0)">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="javascript:void(0)">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};

export default Simple;