import React from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import {chartData, countryList1} from "../../../app/routes/dashboard/routes/data";
import CountryListItem from "./CountryListItem";

const SiteVisitor = () => {
    return (
        <div>
            <h4 className="mb-2 text-muted">Countries</h4>
            <div className="row">
                <div className="col-lg-4 col-sm-6 col-12 mb-5 mb-sm-1">
                    {countryList1.map((country, index) => <CountryListItem key={index} country={country}/>)}
                </div>
                <div className="col-lg-8 col-sm-6 col-12">
                    <ResponsiveContainer width="100%" height={150}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Line type="monotone" dataKey="pv" stroke="#3367d6"
                                  fill="#3367d6"/>
                            <Line type="monotone" dataKey="uv" stroke="#f3b439"
                                  fill="#f3b439"/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
};

export default SiteVisitor;