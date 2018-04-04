import React from 'react';
import TinyBarChart from './Components/TinyBarChart';
import StackedBarChart from './Components/StackedBarChart';
import MixBarChart from './Components/MixBarChart';
import CustomShapeBarChart from './Components/CustomShapeBarChart';
import PositiveAndNegativeBarChart from './Components/PositiveAndNegativeBarChart';
import BarChartStackedBySign from './Components/BarChartStackedBySign';
import BiaxialBarChart from './Components/BiaxialBarChart';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const BarChart = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="chart.bar"/>} match={match}/>

            <div className="row">
                <CardBox heading="Tiny Bar Chart">
                    <TinyBarChart />
                </CardBox>
                <CardBox heading="Stacked Bar Chart">
                    <StackedBarChart />
                </CardBox>
                <CardBox heading="Mix Bar Chart">
                    <MixBarChart />
                </CardBox>
                <CardBox heading="Custom Shape Bar Chart">
                    <CustomShapeBarChart />
                </CardBox>
                <CardBox heading="Positive And Negative Bar Chart">
                    <PositiveAndNegativeBarChart />
                </CardBox>
                <CardBox heading="Bar Chart Stacked By Sign">
                    <BarChartStackedBySign />
                </CardBox>
                <CardBox styleName="col-12" heading="Biaxial Bar Chart">
                    <BiaxialBarChart />
                </CardBox>
            </div>
        </div>
    );
};

export default BarChart;
