import React from 'react';
import TwoLevelPieChart from './Components/TwoLevelPieChart';
import StraightAnglePieChart from './Components/StraightAnglePieChart';
import TwoSimplePieChart from './Components/TwoSimplePieChart';
import CustomActiveShapePieChart from './Components/CustomActiveShapePieChart';
import PieChartWithCustomizedLabel from './Components/PieChartWithCustomizedLabel';
import PieChartWithPaddingAngle from './Components/PieChartWithPaddingAngle';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';


const PieChart = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="chart.pie"/>} match={match}/>

            <div className="row">
                <CardBox heading="Two Level Pie Chart">
                    <TwoLevelPieChart />
                </CardBox>
                <CardBox heading="Straight Angle Pie Chart">
                    <StraightAnglePieChart />
                </CardBox>
                <CardBox heading="Custom Active Shape Pie Chart">
                    <CustomActiveShapePieChart />
                </CardBox>
                <CardBox heading="Pie Chart With Customized Label">
                    <PieChartWithCustomizedLabel />
                </CardBox>
                <CardBox styleName="col-lg-12" heading="Two Simple Pie Chart">
                    <TwoSimplePieChart />
                </CardBox>
                <CardBox styleName="col-lg-12" heading="Pie Chart With Padding Angle">
                    <PieChartWithPaddingAngle />
                </CardBox>
            </div>
        </div>
    );
};

export default PieChart;
