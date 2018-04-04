import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

const NoListBreadcrumbs = () => {
    return (
        <div>
            <Breadcrumb className="mb-0" tag="nav">
                <BreadcrumbItem tag="a" href="javascript:void(0)">Home</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="javascript:void(0)">Library</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="javascript:void(0)">Data</BreadcrumbItem>
                <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};

export default NoListBreadcrumbs;