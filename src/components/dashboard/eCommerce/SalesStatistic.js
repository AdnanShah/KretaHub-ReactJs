import React from 'react';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import {lineChartData, radialData} from "../../../app/routes/dashboard/routes/ECommerce/data";

const SalesStatistic = () => {
    return (
        <div className="jr-card">
            <div className="jr-card-header d-flex align-items-center">
                <h3 className="mb-0">Sales Statistic</h3>
            </div>

            <div className="row mb-3">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-calendar-check text-muted chart-f20"/>
                        <span className="ml-3 text-dark">48548</span>
                    </span>
                    <p className="text-muted">Orders Monthly</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-calendar-note text-muted chart-f20"/>
                        <span className="ml-3 text-dark">6,875</span>
                    </span>
                    <p className="text-muted">Orders Weekly</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-money-box text-muted chart-f20"/>
                        <span className="ml-3 text-dark">$210,213</span>
                    </span>
                    <p className="text-muted">Average Revenue</p>

                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-money-box text-muted chart-f20"/>
                        <span className="ml-3 text-dark">$692,874</span>
                    </span>
                    <p className="text-muted">Total Revenue</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-calendar text-muted chart-f20"/>
                        <span className="ml-3 text-dark">9,223</span>
                    </span>
                    <p className="text-muted">Total Orders</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <span className="d-flex align-items-center mb-2">
                        <i className="zmdi zmdi-calendar-alt text-muted chart-f20"/>
                        <span className="ml-3 text-dark">8,543</span>
                    </span>
                    <p className="text-muted">Past Orders</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-12 mb-5 mb-lg-1">
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={lineChartData}
                                   margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Line type='monotone' dataKey='amt' stackId="1" stroke='#59AA2B' fill='#59AA2B'/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-lg-6 col-12">
                    <ResponsiveContainer width="100%" height={350}>
                        <RadialBarChart innerRadius={20} outerRadius={120} barSize={10}
                                        data={radialData}>
                            <RadialBar minAngle={15} label background clockWise={true} dataKey='data'/>
                            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='top'
                                    wrapperStyle={{
                                        top: 0,
                                        left: 20,
                                        lineHeight: '24px'
                                    }}/>
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default SalesStatistic;
