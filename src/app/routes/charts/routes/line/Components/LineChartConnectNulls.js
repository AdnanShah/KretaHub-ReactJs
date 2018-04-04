import React from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import data from './data';

const LineChartConnectNulls = () => (
    <ResponsiveContainer width="100%" height={600}>
        <div>
            <div className="mb-4">
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data}
                               margin={{top: 10, right: 0, left: -25, bottom: 0}}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Line type='monotone' dataKey='uv' stroke='#3367d6' fill='#3367d6' />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mb-4">
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data}
                               margin={{top: 10, right: 0, left: -25, bottom: 0}}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Line connectNulls={true} type='monotone' dataKey='uv' stroke='#3367d6' fill='#3367d6' />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    </ResponsiveContainer>
);

export default LineChartConnectNulls