import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import data from './data';

const SynchronizedAreaChart = () => (
    <ResponsiveContainer width="100%">
        <div>
            <p className="mb-4">A demo of synchronized AreaCharts</p>
            <div className="mb-4">

                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={data} syncId="anyId"
                               margin={{top: 10, right: 0, left: -25, bottom: 0}}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type='monotone' dataKey='uv' stroke='#3367d6' fill='#3367d6' />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <p className="mb-4">Maybe some other content</p>
            <div className="mb-4">
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={data} syncId="anyId"
                               margin={{top: 10, right: 0, left: -25, bottom: 0}}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type='monotone' dataKey='pv' stroke='#ffc658' fill='#ffc658' />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    </ResponsiveContainer>
);

export default SynchronizedAreaChart;