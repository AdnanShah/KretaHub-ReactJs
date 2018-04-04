import React from 'react';
import ItemFirst from "../ItemFirst";
import ItemSecond from "../ItemSecond";
import ItemThird from "../ItemThird";

const Basic = () => {
    return (
        <div className="price-tables row pt-default d-flex justify-content-around">
            <div className="col-md-4 px-lg-4">
                <ItemFirst
                    styleName="card package bg-white shadow"
                    headerStyle="package-header bg-primary lighten-1 text-white"
                    itemStyle="package-items text-grey text-darken-3"
                    footerStyle="btn btn-default bg-primary lighten-1 text-white"
                />
            </div>

            <div className="col-md-4 px-lg-4">
                <ItemSecond
                    styleName="card package bg-primary lighten-1 shadow highlight"
                    headerStyle="package-header bg-primary text-white"
                    itemStyle="package-items text-white"
                    footerStyle="btn btn-default bg-primary text-white"
                />
            </div>

            <div className="col-md-4 px-lg-4">
                <ItemThird
                    styleName="card package bg-white shadow"
                    headerStyle="package-header bg-primary lighten-1 text-white"
                    itemStyle="package-items text-grey text-darken-3"
                    footerStyle="btn btn-default bg-primary lighten-1 text-white"
                />
            </div>
        </div>
    )
};

export default Basic;

