import React from 'react';
import ItemFirst from "../ItemFirst";
import ItemSecond from "../ItemSecond";
import ItemThird from "../ItemThird";

const Dark = () => {
    return (
        <div className="price-tables pt-dark row">
            <div className="col-md-4 px-lg-4">
                <ItemFirst
                    styleName="card package bg-white shadow"
                    headerStyle="package-header bg-grey darken-4 text-white"
                    itemStyle="package-items text-grey text-darken-2"
                    footerStyle="btn btn-default jr-btn-rounded btn-block bg-grey darken-4 text-white"
                />
            </div>

            <div className="col-md-4 px-lg-4">
                <ItemSecond
                    styleName="card package bg-grey darken-4 border-0 shadow highlight"
                    headerStyle="package-header bg-amber text-grey text-darken-4"
                    itemStyle="package-items text-white"
                    footerStyle="btn btn-default btn-block jr-btn-rounded bg-amber text-grey text-darken-4"
                />
            </div>

            <div className="col-md-4 px-lg-4">
                <ItemThird
                    styleName="card package bg-white shadow"
                    headerStyle="package-header bg-grey darken-4 text-white"
                    itemStyle="package-items text-grey text-darken-2"
                    footerStyle="btn btn-default jr-btn-rounded btn-block bg-grey darken-4 text-white"
                />
            </div>
        </div>
    )
};
export default Dark;

