import React from 'react';
import {cardData, cardData1, cardData2, cardData3, data1} from 'app/routes/dashboard/routes/data'
import {data, data2, radarChartData} from 'app/routes/dashboard/routes/ECommerce/data'
import {chartData, lineChartData, pieChartData} from 'app/routes/dashboard/routes/News/data';
import ReportBox from 'components/ReportBox/index';
import ChartCard from 'components/dashboard/Common/ChartCard';
import CardHeader from 'components/dashboard/default/CardHeader';
import InfoCard from 'components/InfoCard';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    Cell,
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
    XAxis,
} from 'recharts';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class Matrix extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <div className="animated slideInUpTiny animation-duration-3">
                    <ContainerHeader match={this.props.match} title={
                        <IntlMessages id="sidebar.metrics"/>}/>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12">
                            <ChartCard styleName="bg-secondary text-white">
                                <div className="chart-title">
                                    <h2>1379</h2>
                                    <p>Online Signups</p>
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
                                    <p>Last Month Sale</p>
                                </div>

                                <ResponsiveContainer width="100%" height={110}>
                                    <AreaChart data={data1} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                                        <Area type="monotone" dataKey="pv" stroke="rgba(255,255,255,0.5)"
                                              activeDot={{r: 8}}
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
                                    <p>New Visits this month</p>
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
                                    <p>Total Revenue this year</p>
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
                        <div className="col-lg-3 col-sm-6 col-12">
                            <ReportBox
                                styleName="bg-teal accent-4 text-white"
                                title="85K+"
                                detail="New Subscriber"
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
                                detail=" New Articles"
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
                                detail="New Authors"
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
                                detail="Avg Daily Traffic"
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
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card shadow text-center">
                                <CardHeader title="View" rightItemStyle="badge badge-primary" updatedAt="Monthly"/>
                                <div className="stack-order  py-4 px-2">
                                    <h1 className="chart-f30 font-weight-light">386,200</h1>
                                    <span className="h3 text-muted">Total View</span>
                                    <span className="h5 text-amber">
                                    <i className="zmdi zmdi-flash zmdi-hc-fw"/>98%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card shadow text-center">
                                <CardHeader title="Order" rightItemStyle="badge badge-primary"
                                            updatedAt="Annual"/>
                                <div className="stack-order  py-4 px-2">
                                    <h1 className="chart-f30 font-weight-light">80,800</h1>
                                    <span className="h3 text-muted">New order</span>
                                    <span className="h5 text-primary"><i
                                        className="zmdi zmdi-long-arrow-return zmdi-hc-fw zmdi-hc-rotate-90"/>20%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-sm-12 col-12">
                            <div className="card shadow text-center">
                                <CardHeader title="Visit" rightItemStyle="badge badge-primary"
                                            updatedAt="Today"/>
                                <div className="row col-with-divider py-4 px-2">
                                    <div className="col-6">
                                        <div className="stack-order">
                                            <h1 className="chart-f30 font-weight-light">406,42</h1>
                                            <span className="h3 text-primary">Rapid pace</span>
                                            <span className="h5 text-primary"><i
                                                className="zmdi zmdi-long-arrow-return zmdi-hc-fw zmdi-hc-rotate-90"/>20%</span>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="stack-order">
                                            <h1 className="chart-f30 font-weight-light">206,12</h1>
                                            <span className="h3 text-primary">Slow pace</span>
                                            <span className="h5 text-primary"><i
                                                className="zmdi zmdi-long-arrow-return zmdi-hc-fw zmdi-hc-rotate-90"/>20%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-xl-6 col-sm-12">
                            <ReportBox heading="This Year Sale Report" title="$685K+" detail="Post 9 month data">
                                <BarChart data={chartData}>
                                    <Bar dataKey='amt' fill='#3f51b5'/>
                                    <XAxis stroke="#3f51b5" dataKey="name"/>
                                </BarChart>
                            </ReportBox>
                        </div>

                        <div className="col-xl-6 col-sm-12">
                            <div className="chart-order">
                                <ReportBox heading="This Year Sale Report" title="$685K+"
                                           detail="Post 9 month data">
                                    <PieChart margin={{left: 0, right: 0, top: 0, bottom: 0}}>
                                        <Pie data={pieChartData} dataKey="amt" nameKey="name" cx="50%" cy="85%"
                                             innerRadius={30}
                                             outerRadius={50} fill="#3f51b5" startAngle={180} endAngle={0} label/>
                                    </PieChart>
                                </ReportBox>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-12">
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

                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-12">
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

                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-12">
                            <div className="jr-card">
                                <ResponsiveContainer width="100%" height={160}>
                                    <LineChart data={data1}>
                                        <Line type="monotone" dataKey="uv" stroke="#3367d6" activeDot={{r: 8}}/>
                                        <Line type="monotone" dataKey="pv" stroke="#59AA2B" activeDot={{r: 8}}/>
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-12">
                            <div className="jr-card bg-primary text-white text-center py-5">
                                <div className="mb-3">
                                    <img src="http://via.placeholder.com/54x52" alt="image"/>
                                </div>
                                <h5 className="text-uppercase mb-0">upgrade today</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-12">
                            <InfoCard data={cardData} styleName="bg-secondary"/>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-12">
                            <InfoCard data={cardData1} styleName="bg-cyan darken-1"/>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-12">
                            <InfoCard data={cardData2} styleName="bg-primary"/>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-12">
                            <InfoCard data={cardData3} styleName="bg-red darken-1"/>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Matrix;