import React from 'react';
import PropTypes from 'prop-types';
import {Pie, PieChart, ResponsiveContainer} from 'recharts';
import {data01, data02} from './data';

const TwoLevelPieChart = () => (
    <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie dataKey="value" data={data01} outerRadius={60} fill="#3367d6" />
            <Pie dataKey="value" data={data02} innerRadius={70} outerRadius={90} fill="#ffc658"
                 label />
        </PieChart>
    </ResponsiveContainer>
);

TwoLevelPieChart.propTypes = {
    dataKey: PropTypes.node,
};
export default TwoLevelPieChart;