import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import data from './data';

const MixBarChart = () => (
    <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}
                  margin={{top: 10, right: 0, left: -25, bottom: 0}}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="amt" stackId="a" fill="#3367d6" />
            <Bar dataKey="pv" stackId="a" fill="#ffc658" />
            <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
    </ResponsiveContainer>
);

export default MixBarChart;