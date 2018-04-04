import React from 'react';
import ItemFirst from "../ItemFirst";
import ItemSecond from "../ItemSecond";
import ItemThird from "../ItemThird";

const Circle = () => {
    return (
        <div className="price-tables pt-circle row">
            <div className="col-md-4 px-lg-4">
                <ItemFirst
                    styleName="card package bg-white shadow"
                    headerStyle="package-header bg-yellow darken-1 text-grey text-darken-4"
                    itemStyle="package-items text-grey text-darken-3"
                    footerStyle="btn btn-default btn-block jr-btn-rounded bg-primary text-white"
                />
            </div>

            <div className="col-md-4 px-lg-4">
                <ItemSecond
                    styleName="card package bg-primary lighten-1 shadow highlight"
                    headerStyle="package-header bg-primary text-white"
                    itemStyle="package-items text-white"
                    footerStyle="btn btn-default btn-block jr-btn-rounded bg-amber text-grey text-darken-4"
                />
            </div>

            <div className="col-md-4 px-lg-4">
                <ItemThird
                    styleName="card package bg-white shadow"
                    headerStyle="package-header bg-green accent-4 text-grey text-darken-3"
                    itemStyle="package-items text-grey text-darken-3"
                    footerStyle="btn btn-default btn-block jr-btn-rounded bg-primary text-white"
                />
            </div>
        </div>
    )
};
export default Circle;

