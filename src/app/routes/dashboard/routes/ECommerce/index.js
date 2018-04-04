import React from 'react';
import IconButton from 'material-ui/IconButton';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    Line,
    LineChart,
    Pie,
    PieChart,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis
} from 'recharts';
import {
    announcementsNotification,
    appNotification,
    chartData,
    customers,
    data,
    data1,
    data2,
    marketingData,
    pieChartData,
    products,
    radarChartData
} from './data'
import ChartCard from 'components/dashboard/Common/ChartCard';
import ProductImage from 'components/dashboard/eCommerce/ProductImage';
import OrderTable from 'components/dashboard/eCommerce/OrderTable';
import MarketingTable from 'components/dashboard/Common/MarketingTable';
import PopularProduct from 'components/dashboard/Common/PopularProduct';
import ContainerHeader from 'components/ContainerHeader/index';
import ReportBox from 'components/ReportBox/index';
import SalesStatistic from 'components/dashboard/eCommerce/SalesStatistic';
import UserDetailTable from 'components/dashboard/Common/UserDetailTable';
import LatestNotifications from 'components/dashboard/Common/LatestNotifications';
import CustomerAroundWorld from 'components/dashboard/Common/CustomerAroundWorld';
import CardMenu from 'components/dashboard/Common/CardMenu';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import IntlMessages from 'util/IntlMessages';

class ECommerce extends React.Component {

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
                <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.dashboard.ecommerce"/>}/>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-secondary text-white">
                            <div className="chart-title">
                                <h2>1379</h2>
                                <p><IntlMessages id="dashboard.onlineSignups"/></p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                <BarChart data={data}>
                                    <Bar dataKey="pv" fill="white"/>
                                    <Bar dataKey="uv" fill="white"/>
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-primary text-white">
                            <div className="chart-title">
                                <h2>$7,890</h2>
                                <p><IntlMessages id="dashboard.lastMonthSale"/></p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                <AreaChart data={data1} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                                    <Area type="monotone" dataKey="pv" stroke="rgba(255,255,255,0.5)" activeDot={{r: 8}}
                                          fillOpacity={.5}
                                          fill="white"/>
                                </AreaChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-teal lighten-1 text-white">
                            <div className="chart-title">
                                <h2>236</h2>
                                <p><IntlMessages id="dashboard.newVisits"/></p>
                            </div>


                            <ResponsiveContainer width="100%" height={110}>
                                <LineChart data={data2}>
                                    <Line type="monotone" dataKey="uv" stroke="#ffffff" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="pv" stroke="#ffffff"/>
                                    <Line type="monotone" dataKey="amt" stroke="#ffffff"/>
                                </LineChart>
                            </ResponsiveContainer>

                        </ChartCard>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-blue text-white">
                            <div className="chart-title">
                                <h2>$87,345</h2>
                                <p><IntlMessages id="dashboard.totalRevenue"/></p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                <LineChart data={data1}>
                                    <Line dataKey="uv" stroke="#ffffff" activeDot={{r: 8}}/>
                                </LineChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <SalesStatistic/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-5 col-12">
                        <div className="row">
                            <div className="col-xl-12 col-sm-6">
                                <ReportBox heading={<IntlMessages id="dashboard.thisYearSaleReport"/>} title="$685K+"
                                           detail={<IntlMessages id="dashboard.post9MonthData"/>}>
                                    <BarChart data={chartData}>
                                        <Bar dataKey='amt' fill='#3f51b5' maxBarSize={10}/>
                                        <XAxis stroke="#3f51b5" dataKey="name"/>
                                    </BarChart>
                                </ReportBox>
                            </div>

                            <div className="col-xl-12 col-sm-6">
                                <div className="chart-order">
                                    <ReportBox heading={<IntlMessages id="dashboard.thisYearSaleReport"/>}
                                               title="$685K+"
                                               detail={<IntlMessages id="dashboard.post9MonthData"/>}>
                                        <PieChart margin={{left: 0, right: 0, top: 0, bottom: 0}}>
                                            <Pie data={pieChartData} dataKey="amt" nameKey="name" cx="50%" cy="85%"
                                                 innerRadius={30}
                                                 outerRadius={50} fill="#3f51b5" startAngle={180} endAngle={0} label/>
                                        </PieChart>
                                    </ReportBox>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-4 col-md-6 col-12">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.newCustomers"/>}
                                        subHeading={<IntlMessages id="dashboard.newThisMonth"/>} styleName="mb-2"/>

                            <UserDetailTable data={customers}/>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 col-12">
                        <ProductImage/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex align-items-center">
                                <div className="mr-auto">
                                    <h3 className="d-inline-block mb-0"><IntlMessages id="table.recentOrders"/></h3>
                                    <span className="text-white badge badge-success"><IntlMessages id="table.thisWeek"/></span>
                                </div>
                                <IconButton className="size-30" onClick={this.onOptionMenuSelect.bind(this)}>
                                    <i className="zmdi zmdi-chevron-down zmdi-hc-fw"/>
                                </IconButton>
                            </div>
                            <OrderTable/>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex align-items-center mb-3">
                                <h3 className="card-heading mb-0"><i
                                    className="zmdi zmdi-chart-donut zmdi-hc-fw text-primary text-lighten-2 mr-2"/>
                                    <IntlMessages id="dashboard.marketingCampaign"/>
                                </h3>
                                <span className="badge badge-primary ml-auto">Today</span>
                            </div>
                            <MarketingTable data={marketingData}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-8 col-lg-12 order-xl-2">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.popularProducts"/>}
                                        subHeading={<IntlMessages id="dashboard.loremIpsum"/>} styleName="mb-4"/>

                            <div className="row">
                                {products.map((product, index) => <PopularProduct key={index} product={product}/>)}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 order-xl-1">
                        <LatestNotifications appNotification={appNotification}
                                             announcementsNotification={announcementsNotification}/>
                    </div>

                    <div className="col-xl-12 col-md-6 order-xl-3">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12">
                                <div className="jr-card">
                                    <ResponsiveContainer width="100%" height={160}>
                                        <RadarChart outerRadius={80} data={radarChartData}>
                                            <Radar name="Mike" dataKey="A" stroke="#3367d6" fill="#3367d6"
                                                   fillOpacity={0.6}/>
                                            <PolarGrid/>
                                            <PolarRadiusAxis/>
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 col-12">
                                <div className="jr-card">
                                    <ResponsiveContainer width="100%" height={160}>
                                        <PieChart>
                                            <Pie dataKey="amt" data={pieChartData} cx="50%" cy="50%" innerRadius={40}
                                                 outerRadius={60}
                                                 fill="#ffc658"/>
                                            <Tooltip/>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="col-xl-4 col-sm-12 col-12">
                                <div className="jr-card">
                                    <ResponsiveContainer width="100%" height={160}>
                                        <LineChart data={data1}>
                                            <Line type="monotone" dataKey="uv" stroke="#3367d6" activeDot={{r: 8}}/>
                                            <Line type="monotone" dataKey="pv" stroke="#59AA2B" activeDot={{r: 8}}/>
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CustomerAroundWorld/>
                <CardMenu menuState={menuState} anchorEl={anchorEl}
                          handleRequestClose={this.handleRequestClose.bind(this)}/>
            </div>
        );
    }
}

export default ECommerce;