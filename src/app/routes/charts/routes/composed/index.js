import React from 'react';
import LineBarAreaComposedChart from './Components/LineBarAreaComposedChart';
import VerticalComposedChart from './Components/VerticalComposedChart';
import SameDataComposedChart from './Components/SameDataComposedChart';
import ComposedChartWithAxisLabels from './Components/ComposedChartWithAxisLabels';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const ComposedChart = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="chart.bar"/>} match={match}/>

            <div className="row">
                <CardBox heading="Line Bar Area Composed Chart">
                    <LineBarAreaComposedChart />
                </CardBox>
                <CardBox heading="Vertical Composed Chart">
                    <VerticalComposedChart />
                </CardBox>
                <CardBox heading="Same Data Composed Chart">
                    <SameDataComposedChart />
                </CardBox>
                <CardBox heading="Composed Chart With Axis Labels">
                    <ComposedChartWithAxisLabels />
                </CardBox>
            </div>
        </div>
    );
};

export default ComposedChart;
