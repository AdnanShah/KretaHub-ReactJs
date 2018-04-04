import React from 'react';
import ItemFirst from "../ItemFirst";
import ItemSecond from "../ItemSecond";
import ItemThird from "../ItemThird";

const Classic = () => {
    return (
        <div className="price-tables pt-classic row">
            <div className="col-md-4 px-lg-4">
                <ItemFirst
                    styleName="bg-amber lighten-4 card package rounded-0 animated zoomIn"
                    headerStyle="package-header bg-amber lighten-2 text-black"
                    itemStyle="package-items text-grey text-darken-3"
                    footerStyle="btn btn-default bg-primary lighten-1 text-white"
                />
            </div>

            <div className="col-md-4 px-lg-4">
                <ItemSecond
                    styleName="bg-primary lighten-1 card package rounded-0 highlight animated zoomIn animated-delay-4"
                    headerStyle="package-header bg-primary text-white"
                    itemStyle="package-items text-white"
                    footerStyle="btn btn-default bg-amber lighten-1 text-black"
                />
            </div>

            <div className="col-md-4 px-lg-4">
                <ItemThird
                    styleName="card package bg-green accent-1 rounded-0 animated zoomIn animated-delay-8"
                    headerStyle="package-header bg-green accent-4 text-black"
                    itemStyle="package-items text-grey text-darken-3"
                    footerStyle="btn btn-default bg-primary lighten-1 text-white"
                />
            </div>
        </div>
    )
};

export default Classic;

