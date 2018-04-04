import React from 'react';
import SimpleAreaChart from './Components/SimpleAreaChart';
import StackedAreaChart from './Components/StackedAreaChart';
import PercentAreaChart from './Components/PercentAreaChart';
import AreaChartConnectNulls from './Components/AreaChartConnectNulls';
import SynchronizedAreaChart from './Components/SynchronizedAreaChart';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const AreaChart = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="chart.area"/>} match={match}/>
            <div className="row">
                <CardBox heading="Simple Area Chart">
                    <SimpleAreaChart/>
                </CardBox>
                <CardBox heading="Stacked Area Chart">
                    <StackedAreaChart/>
                </CardBox>
                <CardBox heading="AreaChart Connect Nulls">
                    <AreaChartConnectNulls/>
                </CardBox>
                <CardBox heading="Synchronized Area Chart">
                    <SynchronizedAreaChart/>
                </CardBox>
                <CardBox styleName="col-12" heading="Percent Area Chart">
                    <PercentAreaChart/>
                </CardBox>
            </div>
        </div>
    );
};

export default AreaChart;
