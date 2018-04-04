import React from 'react';
import SimpleLineChart from './Components/SimpleLineChart';
import VerticalLineChart from './Components/VerticalLineChart';
import CustomizedDotLineChart from './Components/CustomizedDotLineChart';
import LineChartWithReferenceLines from './Components/LineChartWithReferenceLines';
import DashedLineChart from './Components/DashedLineChart';
import LineChartWithXAxisPading from './Components/LineChartWithXAxisPading';
import LineChartConnectNulls from './Components/LineChartConnectNulls';
import SynchronizedLineChart from './Components/SynchronizedLineChart';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const LineChart = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="chart.line"/>} match={match}/>

            <div className="row">
                <CardBox heading="Simple Line Chart">
                    <SimpleLineChart />
                </CardBox>
                <CardBox heading="Vertical Line Chart">
                    <VerticalLineChart />
                </CardBox>
                <CardBox heading="Customized Dot Line Chart">
                    <CustomizedDotLineChart />
                </CardBox>
                <CardBox heading="Line Chart With Reference Lines">
                    <LineChartWithReferenceLines />
                </CardBox>
                <CardBox heading="Dashed Line Chart">
                    <DashedLineChart />
                </CardBox>
                <CardBox heading="Line Chart With X-Axis Padding">
                    <LineChartWithXAxisPading />
                </CardBox>
                <CardBox heading="Synchronized Line Chart">
                    <SynchronizedLineChart />
                </CardBox>
                <CardBox heading="Line Chart Connect Nulls">
                    <LineChartConnectNulls />
                </CardBox>
            </div>
        </div>
    );
};

export default LineChart;
