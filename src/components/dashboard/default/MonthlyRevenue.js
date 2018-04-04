import React from 'react';
import {Area, AreaChart, Legend, ResponsiveContainer, Tooltip} from 'recharts';

const MonthlyRevenue = ({chartData}) => (
    <ResponsiveContainer width="100%" height={192}>
        <AreaChart data={chartData} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
            <Legend
                layout='vertical'
                verticalAlign="top"
                margin={{left: 10}}
                wrapperStyle={{
                    top: 0,
                    left: 24,
                    lineHeight: '24px'
                }}
            />
            <Tooltip/>
            <Area type="monotone" dataKey="Expanse" stroke="#f3b439" fillOpacity={0.8} fill="#f3b439"/>
            <Area type="monotone" dataKey="Income" stroke="#03275b" fillOpacity={0.8} fill="#3367d6"/>
        </AreaChart>
    </ResponsiveContainer>
);

export default MonthlyRevenue;