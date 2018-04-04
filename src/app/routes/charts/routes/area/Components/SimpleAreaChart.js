import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import data from './data';

const SimpleAreaChart = () => (
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
);

export default SimpleAreaChart;