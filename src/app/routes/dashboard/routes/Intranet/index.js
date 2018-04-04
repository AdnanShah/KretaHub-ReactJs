import React from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MonthlyRevenue from 'components/dashboard/default/MonthlyRevenue';
import {connections, expanseData1, todoData} from '../data';
import SimpleToDo from 'components/ToDoCard/index';
import UserDetailTable from 'components/dashboard/Common/UserDetailTable';
import UserProfileCard from 'components/dashboard/Common/userProfileCard/UserProfileCard';
import MarketingTable from 'components/dashboard/Common/MarketingTable';
import PhotoCollage from 'components/dashboard/Common/PhotoCollage/index';
import LatestNotifications from 'components/dashboard/Common/LatestNotifications';
import RecentActivities from 'components/dashboard/Common/RecentActivities/index';
import {
    announcementsNotification,
    appNotification,
    dailyFeedData,
    marketingData,
    products,
    projects,
    recentList
} from './data';

import ProjectsList from 'components/dashboard/Common/ProjectsList';
import YourDailyFeed from 'components/dashboard/Common/DailyFeed/index';
import TimerView from 'components/dashboard/Common/TimerView/index';
import SimpleMap from 'app/routes/map/routes/simple/Components/SimpleMap';
import ContactCard from 'components/Cards/Contact/index';
import SimpleCard from 'components/Cards/Sample/index';
import PopularProduct from 'components/dashboard/Common/PopularProduct';
import ContainerHeader from 'components/ContainerHeader/index';
import CustomerAroundWorld from 'components/dashboard/Common/CustomerAroundWorld';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import CardMenu from 'components/dashboard/Common/CardMenu';
import IntlMessages from 'util/IntlMessages';

class Intranet extends React.Component {

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
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.dashboard.intranet"/>}/>

                <div className="row">
                    <div className="col-12">
                        <div className="jr-card bg-transparent no-shadow p-0">
                            <div className="jr-card-header pt-3 px-4">
                                <h3><IntlMessages id="dashboard.userStatstics"/></h3>
                            </div>
                            <MonthlyRevenue chartData={expanseData1}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="card shadow text-center">
                            <div className="card-header py-3 d-flex justify-content-between">
                                <h3 className="mb-0"><IntlMessages id="sidebar.view"/></h3>
                                <span className="badge badge-secondary"><IntlMessages id="dashboard.monthly"/></span>
                            </div>
                            <div className="stack-order  py-4 px-2">
                                <h1 className="chart-f30">386,200</h1>
                                <span className="h3 text-muted"><IntlMessages id="dashboard.totalView"/></span>
                                <span className="h5 text-amber">
                                    <i className="zmdi zmdi-flash zmdi-hc-fw"/>98%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="card shadow text-center">
                            <div className="card-header py-3 d-flex justify-content-between">
                                <h3 className="mb-0"><IntlMessages id="dashboard.orders"/></h3>
                                <span className="badge badge-secondary"><IntlMessages id="dashboard.annual"/></span>
                            </div>
                            <div className="stack-order  py-4 px-2">
                                <h1 className="chart-f30">80,800</h1>
                                <span className="h3 text-muted"><IntlMessages id="dashboard.newOrder"/></span>
                                <span className="h5 text-primary"><i
                                    className="zmdi zmdi-long-arrow-return zmdi-hc-fw zmdi-hc-rotate-90"/>20%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                        <div className="card shadow text-center">
                            <div className="card-header py-3 d-flex justify-content-between">
                                <h3 className="mb-0"><IntlMessages id="dashboard.visited"/></h3>
                                <span className="badge badge-primary"><IntlMessages id="dashboard.today"/></span>
                            </div>
                            <div className="row col-with-divider py-4 px-2">
                                <div className="col-6">
                                    <div className="stack-order">
                                        <h1 className="chart-f30">406,42</h1>
                                        <span className="h3 text-primary"><IntlMessages
                                            id="dashboard.rapidPace"/></span>
                                        <span className="h5 text-primary"><i
                                            className="zmdi zmdi-long-arrow-return zmdi-hc-fw zmdi-hc-rotate-90"/>20%</span>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="stack-order">
                                        <h1 className="chart-f30">206,12</h1>
                                        <span className="h3 text-primary"><IntlMessages id="dashboard.slowPace"/></span>
                                        <span className="h5 text-primary"><i
                                            className="zmdi zmdi-long-arrow-return zmdi-hc-fw zmdi-hc-rotate-90"/>20%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <UserProfileCard headerStyle="bg-blue darken-1"/>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.newConnections"/>}
                                        subHeading={<IntlMessages id="dashboard.thisWeek"/>} styleName="mb-2"/>

                            <UserDetailTable data={connections}/>
                        </div>
                    </div>

                    <div className="col-lg-5 col-sm-6 col-12">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.recentActivities"/>}
                                        subHeading={<IntlMessages id="dashboard.lastActivity"/>} styleName="mb-2"/>

                            {recentList.map((recentList, index) => <RecentActivities key={index}
                                                                                     recentData={recentList}/>)}

                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex justify-content-between">
                                <h3 className="mb-0"><IntlMessages id="dashboard.currentProjects"/></h3>
                                <span className="badge badge-success"><IntlMessages id="table.thisWeek"/></span>
                            </div>
                            <ProjectsList data={projects}/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex">
                                <div className="mr-auto">
                                    <h3 className="card-heading d-inline-block mb-0"><IntlMessages
                                        id="dashboard.toDoItems"/></h3>
                                    <span className="badge badge-info"><IntlMessages id="dashboard.today"/></span>
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
                                    className="zmdi zmdi-chart-donut zmdi-hc-fw text-info mr-2"/><IntlMessages
                                    id="dashboard.marketingCampaign"/>
                                </h3>
                                <span className="badge badge-primary ml-auto"><IntlMessages
                                    id="dashboard.today"/></span>
                            </div>
                            <MarketingTable data={marketingData}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <LatestNotifications appNotification={appNotification}
                                             announcementsNotification={announcementsNotification}/>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12 order-lg-3">
                        <TimerView headerColor="blue darken-1"/>
                    </div>

                    <div className="col-lg-5 col-md-12 col-sm-6 col-12">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex">
                                <div className="mr-auto">
                                    <h3 className="card-heading d-inline-block mb-0"><IntlMessages
                                        id="dashboard.yourDailyFeed"/></h3>
                                    <span className="badge badge-success"><IntlMessages id="dashboard.newFeed"/></span>
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
                    <div className="col-md-8 col-12">
                    <CustomerAroundWorld/>
                    </div>
                    <div className="col-md-4 col-12">
                        <PhotoCollage/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-5 col-sm-6 col-12">
                        <div className="jr-card p-0">
                            <SimpleMap styleName="embed-responsive-1by1"/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <ContactCard/>
                    </div>

                    <div className="col-lg-3 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-lg-12 col-sm-6 col-12">
                                <SimpleCard/>
                            </div>
                            <div className="col-lg-12 col-sm-6 col-12">
                                <div className="jr-card">
                                    <div className="jr-card-thumb">
                                        <img className="card-img img-fluid"
                                             src="http://via.placeholder.com/500x330"/>
                                    </div>
                                    <div className="jr-card-social">
                                        <ul className="social-link">
                                            <li className="active">
                                                <a href="javascript:void(0)">
                                                    <i className="zmdi zmdi-favorite zmdi-hc-lg"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="zmdi zmdi-bookmark zmdi-hc-lg"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="zmdi zmdi-share zmdi-hc-lg"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.popularProducts"/>}
                                        subHeading={<IntlMessages id="dashboard.loremIpsum"/>} styleName="mb-4"/>

                            <div className="row mb-0">

                                {products.map((products, index) => <PopularProduct key={index} product={products}
                                                                                   styleName="col-xl-4 col-sm-6 col-12 mb-4"/>)}
                            </div>
                            <Button size="small" color="primary">VIEW ALL PRODUCTS</Button>
                        </div>
                    </div>
                </div>
                <CardMenu menuState={menuState} anchorEl={anchorEl}
                          handleRequestClose={this.handleRequestClose.bind(this)}/>

            </div>
        );
    }
}

export default Intranet;