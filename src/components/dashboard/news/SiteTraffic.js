import React from 'react';
import IconButton from 'material-ui/IconButton';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {siteTrafficData} from "../../../app/routes/dashboard/routes/News/data";

const SiteTraffic = () => {
    return (
        <div className="jr-card">
            <div className="jr-card-header d-flex align-items-center">
                <h3 className="mb-0">
                    Site Traffic
                </h3>

                <div className="ml-auto">
                    <span className="badge bg-green text-white">Live Update</span>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-3">
                    <IconButton className="border-2 border-green mr-3 align-middle">
                        <i className="zmdi zmdi-plus text-green"/>
                    </IconButton>
                    <span>New Visitor</span>
                </div>
                <div className="col-3">
                    <IconButton className="border-2 border-red mr-3 align-middle">
                        <i className="zmdi zmdi-repeat-one text-red"/>
                    </IconButton>
                    <span>Repeated User</span>

                </div>
                <div className="col-3">
                    <IconButton className="border-2 border-primary mr-3 align-middle">
                        <i className="zmdi zmdi-star text-primary"/>
                    </IconButton>
                    <span>Subscriber</span>

                </div>
                <div className="col-3">

                    <IconButton className="border-2 border-red mr-3 align-middle">
                        <i className="zmdi zmdi-share text-red"/>
                    </IconButton>
                    <span>Share</span>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={350}>
                <LineChart data={siteTrafficData}
                           margin={{top: 0, right: 0, left: -15, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Line type='monotone' dataKey='newVisitor' stackId="1" stroke='#59AA2B' fill='#59AA2B'/>
                    <Line type='monotone' dataKey='repeatedUser' stackId="2" stroke='#F44336' fill='#F44336'/>
                    <Line type='monotone' dataKey='subscriber' stackId="4" stroke='#3367d6' fill='#3367d6'/>
                    <Line type='monotone' dataKey='share' stackId="3" stroke='#F44336' fill='#F44336'/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SiteTraffic;
