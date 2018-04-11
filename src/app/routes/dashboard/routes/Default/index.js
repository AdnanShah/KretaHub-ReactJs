import React from 'react';
import IconButton from 'material-ui/IconButton';
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
    ResponsiveContainer,
    Tooltip,
    XAxis
} from 'recharts';
import TextField from 'material-ui/TextField';
import MonthlyRevenue from 'components/dashboard/default/MonthlyRevenue';
import {chartDataWithoutAxis, data2} from 'app/routes/dashboard/routes/ECommerce/data'
import {cardData, cardData1, cardData2, connections, data1, expanseData, todoData} from '../data'
import ReportBox from 'components/ReportBox/index';
import InfoCard from 'components/InfoCard';
import InFoWithBgImage from 'components/InFoWithBgImage';
import UserDetailCard from 'components/UserDetailCard';
import SimpleToDo from 'components/ToDoCard/index';
import ChartCard from 'components/dashboard/Common/ChartCard';
import SiteVisitor from 'components/dashboard/Common/SiteVisitor';
import CardBox from 'components/CardBox';
import UserDetailTable from 'components/dashboard/Common/UserDetailTable';
import UserProfileCard from 'components/dashboard/Common/userProfileCard/UserProfileCard';
import MarketingTable from 'components/dashboard/Common/MarketingTable';
import PhotoCollage from 'components/dashboard/Common/PhotoCollage/index';
import LatestNotifications from 'components/dashboard/Common/LatestNotifications';
import RecentActivities from 'components/dashboard/Common/RecentActivities/index';
import {dailyFeedData, projects, recentList} from '../Intranet/data';
import ProjectsList from 'components/dashboard/Common/ProjectsList';
import YourDailyFeed from 'components/dashboard/Common/DailyFeed/index';
import TimerView from 'components/dashboard/Common/TimerView/index';
import SimpleMap from 'app/routes/map/routes/simple/Components/SimpleMap';
import ContactCard from 'components/Cards/Contact';
import SimpleCard from 'components/Cards/Sample/index';
import PopularProduct from 'components/dashboard/Common/PopularProduct';
import WeatherDetail from 'components/Weather/WeatherDetail';
import LatestPosts from 'components/dashboard/Common/LatestPosts/index';
import {
    announcementsNotification,
    appNotification,
    latestPostList,
    marketingData,
    pieChartData,
    products
} from 'app/routes/dashboard/routes/Default/data';
import Button from 'material-ui/Button';
import CafeCard from 'components/Cards/Cafe/index';
import Statistics from 'components/dashboard/default/Statistics';
import ContainerHeader from 'components/ContainerHeader/index';
import CardMenu from 'components/dashboard/Common/CardMenu';
import Team from 'app/routes/extraPages/routes/aboutUs/Componets/Team';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import IntlMessages from 'util/IntlMessages';
import MenuItem from 'material-ui/Menu/MenuItem';
import countries from './jsonDataSource/countries.json';
import DateFormatInput from 'material-ui-next-datepicker'
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
import { Link } from 'react-router-dom';
const label= {
    /* Other styling..*/
    textAlign: 'right',
    clear: 'both',
    marginRight:'15px',
}
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
});
class Default extends React.Component {
        

    handleChange = name => event => {
        console.log("name",name,"event",event.target.value);
        this.setState({[name]: event.target.value});
       
    };    
    handleChange2 = name => event => {
        console.log("name",name,"event",event.target.value);
        this.setState({country2: event.target.value});
        console.log("name",this.state.name,this.state);

    }; 
    onOptionMenuSelect = event => {
        this.setState({menuState: true, anchorEl: event.currentTarget});
    };
    handleRequestClose = () => {
        this.setState({menuState: false});
    };

    constructor() {
        super();
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        this.state = {
            anchorEl: undefined,
            menuState: false,
            country1:'Algeria',
            country2:'Australia',
            currentDate:yyyy+'-'+mm+'-'+dd,
        }
        
    }
    onChange = (date) => {
        console.log(date)
        this.setState({date})
      } 
      nextRoute = () => {
        this.props.history.push({
              pathname:'freightSearch',
              state:{key:this.state}              
          });
      }
   

    render() {
        const {anchorEl, menuState,currentDate} = this.state;
        const { classes } = this.props;
        console.log(this.state.currentDate);
        return (
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                {/* <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.dashboard"/>}/> */}
                <div className="row">
                    <div className="col-xl-5 col-xl-7 col-xl-9 col-11 col-12 col-13">
                        <div className="jr-card p-0">
                            <div className="jr-card-header pt-3 px-4">
                                <h2><IntlMessages id="Freight Quote Search"/></h2>
                            </div>
                            <div class="form-group">
                                <label style={{marginRight:'20px'}} for="Student">Departure:</label>
                                <TextField
                                id="city"
                                select
                                style={{marginRight:'85px'}}
                                label="Select Country"
                                value={this.state.country1}
                                onChange={this.handleChange('country1')}
                                SelectProps={{}}
                                helperText="Please select your city"
                                margin="normal"
                                >
                                {countries.map(countrie => (
                                    <MenuItem key={countrie.id} value={countrie.name}>
                                        {countrie.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                                <label style={{marginRight:'20px'}} for="Student">Arrival:</label>
                                <TextField
                                id="city"
                                select
                                label="Select Country"
                                value={this.state.country2}
                                onChange={this.handleChange2('country2')}
                                SelectProps={{}}
                                helperText="Please select your city"
                                margin="normal"
                                >
                                {countries.map(countrie => (
                                    <MenuItem key={countrie.id} value={countrie.name}>
                                        {countrie.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            </div>
                            <form>
                                <div id="group1">
                                    <label style={{marginRight:'20px'}} for="Student">Freight type:</label>
                                            <input type="radio" value="group1" name="Umer "/>
                                    <label style={{marginRight:'20px'}} for="Student">FCL</label>        
                                            <input type="radio" value="group1" name="group1"/>
                                    <label style={{marginRight:'20px'}} for="Student">LCL</label> 
                                            <input type="radio" value="group1" name="group1"/>
                                    <label style={{marginRight:'20px'}} for="Student">General Cargo</label>        
                                </div>
                            </form>
                           <br/> 
                            <label style={{marginRight:'20px'}} for="Student">Departure/Arrival date:</label>
                            {/* <DateFormatInput name='date-input'
                               // min={Date}
                                value={currentDate}
                                onChange={this.onChange}
                                fullWidth='false'
                                /> */}
                            <TextField
                                id="date"                   
                                type="date"
                                min={this.state.currentDate}
                                defaultValue={this.state.currentDate}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <label style={{marginRight:'20px'}} for="Student">Until:</label>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue="2018-05-08"
                                style={{marginRight:'20px'}}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <br/> <br/>
                            <Link 
                            to={{
                                pathname:'freightSearch',
                                state: {key:this.state.country},
                            }}     
                        > 
                        <Button variant="raised" 
                        onClick={this.nextRoute}
                        style={{background:'#29487D',color:'#fff'}} 
                                component="span">
                            Search
                        </Button>

                        </Link>  
                        </div>
                    </div>
                </div>
                
                    {/* <div className="col-xl-7 col-12">
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
                            </div> */}

                            {/* <div className="col-xl-5 col-lg-6 col-sm-5 col-12">
                                <ChartCard styleName="bg-primary jr-chart-or text-white">
                                    <div className="chart-title text-right">
                                        <h3 className="mb-0">
                                            <IntlMessages id="dashboard.orders"/>
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
                            </div> */}
                            {/* <div className="col-xl-7 col-lg-6 col-sm-7 col-12">
                                <InFoWithBgImage data={cardData2}/>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-sm-5 col-12">
                                <UserDetailCard/>
                            </div>
                        </div>
                    </div>
                </div> 

                {/* <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <UserProfileCard headerStyle="bg-primary"/>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card">

                            <CardHeader heading="New Connections"
                                        subHeading="3 This week" styleName="mb-2"/>

                            <UserDetailTable data={connections}/>
                        </div>
                    </div> */}

                    {/* <div className="col-lg-5 col-sm-6 col-12">
                        <div className="jr-card">
                            <CardHeader heading={<IntlMessages id="dashboard.recentActivities"/>}
                                        subHeading={<IntlMessages id="dashboard.lastActivity"/>}/>

                            {recentList.map((recentList, index) => <RecentActivities key={index}
                                                                                     recentData={recentList}/>)}
                        </div>
                    </div> */}

                    {/* <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card">
                            <div className="jr-card-header mb-3 d-flex">
                                <h3 className="mb-0 mr-auto"><IntlMessages id="dashboard.currentProjects"/></h3>
                                <span className="badge badge-secondary"><IntlMessages id="table.thisWeek"/></span>
                            </div>
                            <ProjectsList data={projects}/>
                        </div>
                    </div> */}

                    {/* <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex">
                                <div className="mr-auto">
                                    <h3 className="card-heading d-inline-block mb-0"><IntlMessages
                                        id="dashboard.toDoItems"/></h3>
                                    <span className="badge badge-secondary"><IntlMessages id="dashboard.today"/></span>
                                </div>

                                <IconButton className="size-30" onClick={this.onOptionMenuSelect.bind(this)}>
                                    <i className="zmdi zmdi-chevron-down zmdi-hc-fw"/>
                                </IconButton>
                            </div>
                            <SimpleToDo data={todoData}/>
                        </div>
                    </div> */}

                    {/* <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex align-items-center mb-3">
                                <h3 className="card-heading mb-0"><i
                                    className="zmdi zmdi-chart-donut zmdi-hc-fw text-primary text-lighten-2 mr-2"/>
                                    <IntlMessages id="dashboard.marketingCampaign"/>
                                </h3>
                                <span className="badge badge-secondary ml-auto"><IntlMessages
                                    id="table.thisWeek"/></span>
                            </div>
                            <MarketingTable data={marketingData}/>
                        </div>
                    </div>
                </div> */}

                {/* <div className="row">
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
                                    <h3 className="card-heading d-inline-block mb-0"><IntlMessages
                                        id="dashboard.yourDailyFeed"/></h3>
                                    <span className="badge badge-secondary"><IntlMessages id="dashboard.today"/></span>
                                </div>

                                <IconButton className="size-30" onClick={this.onOptionMenuSelect.bind(this)}>
                                    <i className="zmdi zmdi-chevron-down zmdi-hc-fw"/>
                                </IconButton>
                            </div>
                            <YourDailyFeed data={dailyFeedData}/>
                        </div>
                    </div>
                </div> */}

                {/* <div className="row">
                    <div className="col-lg-5 col-12">
                        <ReportBox heading="This Year Sale Report" title="$685K+" detail="Post 9 month data">
                            <BarChart data={chartDataWithoutAxis}>
                                <Bar dataKey='amt' fill='#3f51b5' maxBarSize={10}/>
                                <XAxis stroke="#3f51b5" dataKey="name"/>
                            </BarChart>
                        </ReportBox>
                    </div> */}

                    {/* <div className="col-lg-5 col-sm-8 col-12 order-lg-3 ">
                        <div className="jr-card">
                            <div className="row">
                                <div className="col-sm-5 col-12">
                                    <ResponsiveContainer className="mb-4 mb-sm-1" height={130}>
                                        <PieChart>
                                            <Pie dataKey="amt"
                                                 data={pieChartData} cx="50%" cy="50%"
                                                 innerRadius={40}
                                                 outerRadius={60}
                                                 fill="#3367d6"
                                                 paddingAngle={5}
                                            >
                                                {
                                                    pieChartData.map((entry, index) => <Cell key={index}
                                                                                             fill={COLORS[index % COLORS.length]}/>)
                                                }
                                            </Pie>
                                            <Tooltip/>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="col-sm-7 col-12 text-sm-left text-center align-self-center">
                                    <div className="jr-card-header mb-2">
                                        <h3 className="card-heading"><IntlMessages id="dashboard.googleInsight"/></h3>
                                        <p className="sub-heading"><IntlMessages id="dashboard.lastCalculated"/></p>
                                    </div>
                                    <Button variant="raised" className="text-uppercase jr-btn-sm"
                                            color="primary">
                                        <i className="zmdi zmdi-refresh-sync zmdi-hc-fw "/>
                                        <span><IntlMessages id="dashboard.refresh"/></span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="col-lg-2 col-sm-4 col-12">
                        <div className="jr-card bg-primary text-white text-center py-5">
                            <div className="mb-3">
                                <img src="http://via.placeholder.com/54x52" alt="image"/>
                            </div>
                            <h5 className="text-uppercase mb-0"><IntlMessages id="dashboard.upgradeToday"/></h5>
                        </div>
                    </div>
                </div> */}

                {/* <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-secondary text-white">
                            <div className="chart-title">
                                <h3>1379</h3>
                                <p><IntlMessages id="dashboard.onlineSignups"/></p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                <BarChart data={chartDataWithoutAxis}
                                          margin={{top: 25, right: 25, bottom: 5, left: 25}}>
                                    <Bar dataKey="amt" fill="white" maxBarSize={7}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div> */}

                    {/* <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-primary text-white">
                            <div className="chart-title">
                                <h3>$7,890</h3>
                                <p><IntlMessages id="dashboard.lastMonthSale"/></p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                <AreaChart data={data1} margin={{top: 0, right: 0, bottom: 0, left: 0}}>
                                    <Area type="monotone" dataKey="pv" stroke="rgba(255,255,255,0.5)" activeDot={{r: 8}}
                                          fillOpacity={.5}
                                          fill="white"/>
                                </AreaChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div> */}

                    {/* <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-teal lighten-1 text-white">
                            <div className="chart-title">
                                <h3>236</h3>
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
                    </div> */}

                    {/* <div className="col-lg-3 col-sm-6 col-12">
                        <ChartCard styleName="bg-blue text-white">
                            <div className="chart-title">
                                <h3>$87,345</h3>
                                <p><IntlMessages id="dashboard.totalRevenue"/></p>
                            </div>

                            <ResponsiveContainer width="100%" height={110}>
                                <LineChart data={data1} margin={{top: 0, right: 30, bottom: 0, left: 30}}>
                                    <Line dataKey="uv" stroke="#ffffff" activeDot={{r: 8}}/>
                                </LineChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>
                </div> */}
{/* 
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card">
                            <WeatherDetail/>
                        </div>
                    </div> */}
{/* 
                    <div className="col-lg-5 col-sm-6 col-12">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex">
                                <div className="mr-auto">
                                    <h3 className="card-heading"><IntlMessages id="dashboard.latestPosts"/></h3>
                                    <p className="sub-heading"><IntlMessages id="dashboard.loremIpsum"/></p>
                                </div>

                                <IconButton className="ml-auto size-30" onClick={this.onOptionMenuSelect.bind(this)}>
                                    <i className="zmdi zmdi-more-vert"/>
                                </IconButton>
                            </div>

                            <ul className="list-unstyled">
                                {latestPostList.map((latestPostList, index) =>
                                    <LatestPosts key={index} recentData={latestPostList}/>
                                )}
                            </ul>

                            <div className="py-3">
                                <a href="javascript:void(0)" className="card-link text-uppercase">
                                    <IntlMessages id="dashboard.viewAllPosts"/> </a>
                            </div>
                        </div>
                    </div>
 */}

                    {/* <div className="col-lg-3 col-sm-12 col-12">
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
                </div> */}

                {/* <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex">
                                <div className="mr-auto">
                                    <h3 className="card-heading"><IntlMessages id="dashboard.popularProducts"/></h3>
                                    <p className="sub-heading"><IntlMessages id="dashboard.popularProductsTxt"/></p>
                                </div>

                                <IconButton className="size-30" onClick={this.onOptionMenuSelect.bind(this)}>
                                    <i className="zmdi zmdi-chevron-down"/>
                                </IconButton>
                            </div>
                            <div className="row">
                                {products.map((product, index) => <PopularProduct key={index} product={product}/>)}
                            </div>
                            <a href="javascript:void(0)" className="card-link text-uppercase">
                                <IntlMessages id="dashboard.allProducts"/> </a>
                        </div>
                    </div> */}

                    {/* <div className="col-lg-4 col-sm-6 col-12">
                        <ContactCard/>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12 order-lg-4">
                        <PhotoCollage/>
                    </div>

                    <CardBox styleName="col-lg-8 col-12" heading="Site Visitors Statistics">
                        <div>
                            Lorem ipsum is dummy content Cenas in erat accumsan, hendrerit
                            lorem vel, pulvinar odio. Quisque
                            eu conva. hendrerit lorem vel, pulvinar odio. Quisque eu conva.
                        </div>
                        <SiteVisitor/>
                    </CardBox>
                </div> */}

                {/* <div className="row">
                    <div className="col-md-4 col-12">
                        <Statistics/>
                    </div>

                    <div className="col-md-4 col-sm-6 col-12">
                        <CafeCard/>
                    </div>

                    <div className="col-md-4 col-sm-6 col-12">
                        <Team team={{
                            name: 'Domnic Harris',
                            destination: 'Co-Founder & CEO',
                            description: 'Nam imperdiet ornare enim ac tempor Suspendisse ac accumsan orci jomnic dr neva ketoli respecotra domeko... ',
                            image: 'http://via.placeholder.com/150x150'
                        }}/>
                    </div> */}

{/* 
                    <div className="col-12">
                        <div className="jr-card mb-0 p-0">
                            <SimpleMap/>
                        </div>
                    </div>
                </div> */}

                {/* <CardMenu menuState={menuState} anchorEl={anchorEl}
                          handleRequestClose={this.handleRequestClose.bind(this)}/> */}
     </div>


        );
    }
}

export default Default;