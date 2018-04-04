import React from 'react';

import MonthlyRevenue from 'components/dashboard/default/MonthlyRevenue';
import {
    cardData,
    cardData1,
    cardData2,
    connections,
    data1,
    expanseData,
    todoData
} from 'app/routes/dashboard/routes/data'
import ProductImage from 'components/dashboard/eCommerce/ProductImage';
import InfoCard from 'components/InfoCard';
import InFoWithBgImage from 'components/InFoWithBgImage';
import UserDetailCard from 'components/UserDetailCard';
import SimpleToDo from 'components/ToDoCard/index';
import ChartCard from 'components/dashboard/Common/ChartCard';
import {Line, LineChart, ResponsiveContainer,} from 'recharts';
import UserDetailTable from 'components/dashboard/Common/UserDetailTable';
import UserProfileCard from 'components/dashboard/Common/userProfileCard/UserProfileCard';
import MarketingTable from 'components/dashboard/Common/MarketingTable';
import PhotoCollage from 'components/dashboard/Common/PhotoCollage/index';
import LatestNotifications from 'components/dashboard/Common/LatestNotifications';
import RecentActivities from 'components/dashboard/Common/RecentActivities/index';
import {dailyFeedData, products, projects, recentList} from 'app/routes/dashboard/routes/Intranet/data';
import ProjectsList from 'components/dashboard/Common/ProjectsList';
import YourDailyFeed from 'components/dashboard/Common/DailyFeed/index';
import TimerView from 'components/dashboard/Common/TimerView/index';
import ContactCard from 'components/Cards/Contact/index';
import SimpleCard from 'components/Cards/Sample/index';
import PopularProduct from 'components/dashboard/Common/PopularProduct';
import WeatherDetail from 'components/Weather/WeatherDetail';
import IconButton from 'material-ui/IconButton';
import LatestPosts from 'components/dashboard/Common/LatestPosts/index';
import {latestPostList, marketingData} from 'app/routes/dashboard/routes/Default/data';
import CustomerAroundWorld from 'components/dashboard/Common/CustomerAroundWorld';
import CafeCard from 'components/Cards/Cafe/index';
import Statistics from 'components/dashboard/default/Statistics';
import {announcementsNotification, appNotification} from '../dashboard/routes/News/data';
import CardMenu from 'components/dashboard/Common/CardMenu';
import ContainerHeader from 'components/ContainerHeader/index';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import CardBox from 'components/CardBox';
import SiteVisitor from 'components/dashboard/Common/SiteVisitor';
import IntlMessages from 'util/IntlMessages';

class Widget extends React.Component {
    onOptionMenuSelect = event => {
        this.setState({menuState: true, anchorEl: event.currentTarget});
    };
    handleRequestClose = () => {
        this.setState({menuState: false});
    };

    constructor() {
        super();
        this.state = {
            anchorEl: undefined,
            menuState: false,
        }
    }

    render() {
        const {anchorEl, menuState} = this.state;
        return (
            <div className="app-wrapper">
                <div className="animated slideInUpTiny animation-duration-3">
                    <ContainerHeader match={this.props.match} title={
                        <IntlMessages id="sidebar.widgets"/>}/>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <UserProfileCard headerStyle="bg-secondary"/>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="jr-card">

                                <CardHeader heading="New Connections"
                                            subHeading="3 This week" styleName="mb-2"/>

                                <UserDetailTable data={connections}/>
                            </div>
                        </div>

                        <div className="col-lg-5 col-sm-6 col-12">
                            <div className="jr-card">
                                <CardHeader heading="Recent Activities"
                                            subHeading="Last activity was 2 days ago"/>

                                {recentList.map((recentList, index) => <RecentActivities key={index}
                                                                                         recentData={recentList}/>)}
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="jr-card">
                                <div className="jr-card-header mb-3 d-flex">
                                    <h3 className="mb-0 mr-auto">Current Projects List</h3>
                                    <span className="badge badge-secondary">This Week</span>
                                </div>
                                <ProjectsList data={projects}/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="jr-card">
                                <div className="jr-card-header d-flex">
                                    <div className="mr-auto">
                                        <h3 className="card-heading d-inline-block mb-0">To-do Items List</h3>
                                        <span className="badge badge-secondary">Today</span>
                                    </div>

                                    <IconButton className="size-30" onClick={this.onOptionMenuSelect.bind(this)}>
                                        <i className="zmdi zmdi-chevron-down zmdi-hc-fw"/>
                                    </IconButton>
                                </div>
                                <SimpleToDo data={todoData}/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="jr-card">
                                <div className="jr-card-header d-flex align-items-center mb-3">
                                    <h3 className="card-heading mb-0"><i
                                        className="zmdi zmdi-chart-donut zmdi-hc-fw text-primary text-lighten-2 mr-2"/>Marketing
                                        Campaign
                                    </h3>
                                    <span className="badge badge-secondary ml-auto">This Week</span>
                                </div>
                                <MarketingTable data={marketingData}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-5 col-12">
                            <div className="jr-card p-0">
                                <div className="jr-card-header pt-3 px-4">
                                    <h3>User Statstics</h3>
                                </div>
                                <MonthlyRevenue chartData={expanseData}/>
                            </div>
                        </div>

                        <div className="col-xl-7 col-12">
                            <div className="row">
                                <div className="col-xl-7 col-lg-6 col-sm-7 col-12">
                                    <div className="row">
                                        <div className="col-sm-6 col-12">
                                            <InfoCard data={cardData} styleName="bg-secondary"/>
                                        </div>
                                        <div className="col-sm-6 col-12">
                                            <InfoCard data={cardData1} styleName="bg-cyan darken-2"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-5 col-lg-6 col-sm-5 col-12">
                                    <ChartCard styleName="bg-primary jr-chart-or text-white">
                                        <div className="chart-title text-right">
                                            <h3 className="mb-0">
                                                Orders
                                                <small>(293)</small>
                                            </h3>
                                        </div>

                                        <ResponsiveContainer width="100%" height={62}>
                                            <LineChart data={data1}>
                                                <Line type="monotone" dataKey="uv" stroke="#ffffff" fillOpacity={0.8}
                                                      activeDot={{r: 8}}/>
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </ChartCard>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-sm-7 col-12">
                                    <InFoWithBgImage data={cardData2}/>
                                </div>
                                <div className="col-xl-5 col-lg-6 col-sm-5 col-12">
                                    <UserDetailCard/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <LatestNotifications appNotification={appNotification}
                                                 announcementsNotification={announcementsNotification}/>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-12 order-lg-3">
                            <TimerView headerColor="primary"/>
                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-6 col-12">
                            <div className="jr-card">
                                <div className="jr-card-header d-flex">
                                    <div className="mr-auto">
                                        <h3 className="card-heading d-inline-block mb-0">Your Daily Feed</h3>
                                        <span className="badge badge-secondary">Today</span>
                                    </div>

                                    <IconButton className="size-30" onClick={this.onOptionMenuSelect.bind(this)}>
                                        <i className="zmdi zmdi-chevron-down zmdi-hc-fw"/>
                                    </IconButton>
                                </div>
                                <YourDailyFeed data={dailyFeedData}/>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="jr-card">
                                <div className="jr-card-header d-flex">
                                    <div className="mr-auto">
                                        <h3 className="card-heading">Popular Products</h3>
                                        <p className="sub-heading">It is a long established fact that a reader will be
                                            distracted by the readable content..</p>
                                    </div>

                                    <IconButton className="size-30" onClick={this.onOptionMenuSelect.bind(this)}>
                                        <i className="zmdi zmdi-chevron-down"/>
                                    </IconButton>
                                </div>
                                <div className="row">
                                    {products.map((product, index) => <PopularProduct key={index} product={product}/>)}
                                </div>
                                <a href="javascript:void(0)" className="card-link text-uppercase">all
                                    products</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12">
                            <ContactCard/>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-12 order-lg-4">
                            <PhotoCollage/>
                        </div>

                        <CardBox styleName="col-md-8 col-12" heading="Site Visitors Statistics">
                            <div>
                                Lorem ipsum is dummy content Cenas in erat accumsan, hendrerit
                                lorem vel, pulvinar odio. Quisque
                                eu conva. hendrerit lorem vel, pulvinar odio. Quisque eu conva.
                            </div>
                            <SiteVisitor/>
                        </CardBox>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-12">
                            <div className="jr-card">
                                <WeatherDetail/>
                            </div>
                        </div>

                        <div className="col-xl-5 col-md-5 col-12">
                            <div className="jr-card">
                                <div className="jr-card-header">
                                    <div className="d-flex align-items-center">
                                        <h3 className="mb-0">Latest Posts</h3>
                                        <IconButton className="ml-auto size-30">
                                            <i className="zmdi zmdi-more-vert"/>
                                        </IconButton>
                                    </div>
                                    <p className="text-muted">Lorem ipsum is dummy content dollar sit is...</p>
                                </div>

                                <ul className="list-unstyled">
                                    {latestPostList.map((latestPostList, index) =>
                                        <LatestPosts key={index} recentData={latestPostList}/>
                                    )}
                                </ul>

                                <div className="py-3">
                                    <a href="javascript:void(0)" className="card-link">VIEW ALL POST</a>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-3 col-md-3 col-12">
                            <div className="row">
                                <div className="col-12 mb-2">
                                    <SimpleCard/>
                                </div>
                                <div className="col-12">
                                    <div className="jr-card">
                                        <div className="jr-card-thumb">
                                            <img className="card-img img-fluid"
                                                 src="http://via.placeholder.com/500x330"/>
                                        </div>
                                        <div className="jr-card-social">
                                            <ul className="social-link">
                                                <li>
                                                    <a href="javascript:void(0)" className="text-teal text-lighten-2"><i
                                                        className="zmdi zmdi-favorite"/></a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)"><i className="zmdi zmdi-bookmark"/></a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)"><i className="zmdi zmdi-share"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8 col-md-8 col-12">
                            <CustomerAroundWorld/>
                        </div>

                        <div className="col-xl-4 col-md-4 col-12">
                            <PhotoCollage/>
                        </div>

                        <div className="col-xl-4 col-md-4 col-12">
                            <Statistics/>
                        </div>

                        <div className="col-xl-4 col-md-4 col-12">
                            <CafeCard/>
                        </div>

                        <div className="col-xl-4 col-md-4 col-12">
                            <ProductImage/>
                        </div>
                    </div>
                    <CardMenu menuState={menuState} anchorEl={anchorEl}
                              handleRequestClose={this.handleRequestClose.bind(this)}/>

                </div>
            </div>

        );
    }
}

export default Widget;