import React from 'react';
import {Bar, BarChart, Cell, Line, LineChart, Pie, PieChart, Tooltip} from 'recharts';

import {
    announcementsNotification,
    appNotification,
    article,
    authors,
    chartData,
    lineChartData,
    marketingData,
    pieChartData
} from './data';
import PopularArticles from 'components/dashboard/news/PopularArticals';
import MarketingTable from 'components/dashboard/Common/MarketingTable';
import StoryOfTheDay from 'components/dashboard/news/StoryOfTheDay';
import Comments from 'components/dashboard/news/CommentsTable';
import LatestNotifications from 'components/dashboard/Common/LatestNotifications';
import ReportBox from 'components/ReportBox/index';
import ContainerHeader from 'components/ContainerHeader/index';
import SiteTraffic from 'components/dashboard/news/SiteTraffic';
import YourDailyFeed from 'components/dashboard/news/YourDailyFeed';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import UserDetailTable from 'components/dashboard/Common/UserDetailTable';
import IntlMessages from 'util/IntlMessages';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class News extends React.Component {

    render() {
        return (
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.dashboard.news"/>}/>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <ReportBox
                            styleName="bg-teal accent-4 text-white"
                            title="85K+"
                            detail={<IntlMessages id="dashboard.newSubscriber"/>}
                            subHeadingColor="text-white"
                        >
                            <BarChart data={chartData} maxBarSize={7}
                                      margin={{left: 0, right: 10, top: 10, bottom: 10}}>
                                <Bar dataKey='amt' fill='white'/>
                            </BarChart>
                        </ReportBox>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12">
                        <ReportBox
                            styleName="bg-red text-white"
                            title="526"
                            detail={<IntlMessages id="dashboard.newArticles"/>}
                            subHeadingColor="text-white"
                        >
                            <PieChart>
                                <Pie dataKey="amt" data={pieChartData} cx="50%" cy="50%" innerRadius={30}
                                     outerRadius={45}
                                     fill="#ffc658"/>
                                <Tooltip/>
                            </PieChart>
                        </ReportBox>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12">
                        <ReportBox
                            styleName="bg-purple text-white"
                            title="232"
                            detail={<IntlMessages id="dashboard.newAuthors"/>}
                            subHeadingColor="text-white"
                        >
                            <LineChart data={lineChartData} margin={{left: 5, right: 10, top: 0, bottom: 0}}>
                                <Line dataKey='amt' stroke='white'/>
                            </LineChart>
                        </ReportBox>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12">
                        <ReportBox
                            styleName="bg-red text-white"
                            title="756+"
                            detail={<IntlMessages id="dashboard.avgDailyTraffic"/>}
                            subHeadingColor="text-white"
                        >
                            <PieChart onMouseEnter={this.onPieEnter}>
                                <Pie dataKey="amt"
                                     data={pieChartData} cx="50%" cy="50%"
                                     innerRadius={30}
                                     outerRadius={45}
                                     fill="#3367d6"
                                     paddingAngle={5}
                                >
                                    {
                                        pieChartData.map((entry, index) => <Cell key={index}
                                                                                 fill={COLORS[index % COLORS.length]}/>)
                                    }
                                </Pie>
                            </PieChart>
                        </ReportBox>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-5">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.popularAuthors"/>}
                                        subHeading={<IntlMessages id="dashboard.authorsWith"/>}
                                        styleName="mb-2"/>

                            <div className="jr-card-body">
                                <UserDetailTable data={authors}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.popularArticles"/>}
                                        subHeading={<IntlMessages
                                            id="dashboard.loremIpsum"/>}
                                        styleName="mb-4"/>

                            <div className="jr-card-body">
                                <div className="row">
                                    {article.map((article, index) => <PopularArticles key={index} article={article}/>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <LatestNotifications appNotification={appNotification}
                                             announcementsNotification={announcementsNotification}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <StoryOfTheDay/>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex align-items-center mb-3">
                                <h3 className="card-heading mb-0"><i
                                    className="zmdi zmdi-chart-donut zmdi-hc-fw text-info mr-2"/>Marketing Campaign
                                </h3>
                                <span className="badge badge-primary ml-auto">Today</span>
                            </div>
                            <MarketingTable data={marketingData}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-7 col-lg-6 col-md-7 col-12">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.comments"/>}
                                        styleName="mb-2"/>
                            <Comments/>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-md-5 col-12">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.yourDailyFeed"/>}
                                        styleName="mb-2"/>
                            <YourDailyFeed/>
                        </div>
                    </div>
                </div>
                <SiteTraffic/>
            </div>

        );
    }
}

export default News;