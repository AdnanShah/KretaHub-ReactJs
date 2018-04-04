import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import data from './data';

const LineChartWithXAxisPading = () => (
    <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{top: 10, right: 0, left: -25, bottom: 0}}>
            <XAxis dataKey="name" padding={{left: 30, right: 30}} />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#3367d6" activeDot={{r: 8}} />
            <Line type="monotone" dataKey="uv" stroke="#ffc658" />
        </LineChart>
    </ResponsiveContainer>
);

export default LineChartWithXAxisPading