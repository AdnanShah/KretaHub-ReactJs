import React from 'react';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import data from './data';

const BiaxialBarChart = () => (

    <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}
                  margin={{top: 10, right: 0, left: -25, bottom: 0}}>
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#03275b" />
            <YAxis yAxisId="right" orientation="right" stroke="#ffc658" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="pv" fill="#3367d6" />
            <Bar yAxisId="right" dataKey="uv" fill="#ffc658" />
        </BarChart>
    </ResponsiveContainer>
);

export default BiaxialBarChart;