import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const data = [
    {name: 'Page A', uv: 4000},
    {name: 'Page B', uv: 3000},
    {name: 'Page C', uv: 2000},
    {name: 'Page D'},
    {name: 'Page E', uv: 1890},
    {name: 'Page F', uv: 2390},
    {name: 'Page G', uv: 3490},
];
const AreaChartConnectNulls = () => (
    <ResponsiveContainer width="100%">
        <div>
            <div className="mb-5">
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={data}
                               margin={{top: 10, right: 0, left: -25, bottom: 0}}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type='monotone' dataKey='uv' stroke='#3367d6' fill='#3367d6' />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="mb-4">
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={data}
                               margin={{top: 10, right: 0, left: -25, bottom: 0}}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area connectNulls={true} type='monotone' dataKey='uv' stroke='#3367d6' fill='#3367d6' />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    </ResponsiveContainer>
);

export default AreaChartConnectNulls;