import React from 'react';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
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
import {
    cardData,
    cardData1,
    cardData2,
    connections,
    data1,
    expanseData,
    todoData
} from '../data'
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
import stations from './jsonDataSource/stations.json';
import DateFormatInput from 'material-ui-next-datepicker'
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
import {Link} from 'react-router-dom';
const label = {
    /* Other styling..*/
    textAlign: 'right',
    clear: 'both',
    marginRight: '15px'
}
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    }
});
class Default extends React.Component {

    handleChange = name => event => {
        console.log("name", name, "event", event.target.value);
        this.setState({[name]: event.target.value});

    };
    handleChange2 = name => event => {
        console.log("name", name, "event", event.target.value);
        this.setState({country2: event.target.value});
        console.log("name", this.state.name, this.state);

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
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        this.state = {
            anchorEl: undefined,
            menuState: false,
            country1: 'Algeria',
            country2: 'Australia',
            currentDate: yyyy + '-' + mm + '-' + dd,
            radioButton:''
        }

    }
    onChange = (date) => {
        console.log(date)
        this.setState({date})
    }
    nextRoute = () => {
        this
            .props
            .history
            .push({
                pathname: 'freightSearch',
                state: {
                    key: this.state
                }
            });
    }
    setRadioButton=(event)=>{
        this.setState({radioButton:event.target.value});
    }
    render() {
        const {anchorEl, menuState, currentDate} = this.state;
        const {classes} = this.props;
        console.log(this.state.currentDate);
        return (
            <Paper>
                <div className="container">
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="jr-card-header pt-3 px-4">
                                    <h2><IntlMessages id="Freight Quote Search"/></h2>
                                </div>
                                <div className="row">
                                    <div className="col-6">

                                        <label
                                            style={{
                                            marginRight: '20px'
                                        }}
                                            for="Student">Departure:</label>
                                        <TextField
                                            id="city"
                                            select
                                            style={{
                                            marginRight: '85px'
                                        }}
                                            label="Select Station"
                                            value={this.state.country1}
                                            onChange={this.handleChange('country1')}
                                            SelectProps={{}}
                                            helperText="Please select your station"
                                            margin="normal">
                                            {stations.map(countrie => (
                                                <MenuItem key={countrie.id} value={countrie.field}>
                                                    {countrie.field}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                    <div className="col-6">
                                        <label
                                            style={{
                                            marginRight: '20px'
                                        }}
                                            for="Student">Arrival:</label>
                                        <TextField
                                            id="city"
                                            select
                                            label="Select Station"
                                            value={this.state.country2}
                                            onChange={this.handleChange2('country2')}
                                            SelectProps={{}}
                                            helperText="Please select your station"
                                            margin="normal">
                                            {stations.map(countrie => (
                                                <MenuItem key={countrie.id} value={countrie.field}>
                                                    {countrie.field}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                </div>
                                <br/>
                                <div className="row" >
                                    <div className="col-12" onChange={this.setRadioButton}>

                                        <div id="group1">
                                            <label
                                                style={{
                                                marginRight: '20px'
                                            }}
                                                for="Student">Freight type:</label>
                                            <input type="radio" value="radioButton1" name="radioButton"/>
                                            <label
                                                style={{
                                                marginRight: '20px'
                                            }}
                                                for="Student">FCL</label>
                                            <input type="radio" value="radioButton2" name="radioButton"/>
                                            <label
                                                style={{
                                                marginRight: '20px'
                                            }}
                                                for="Student">LCL</label>
                                            <input type="radio" value="radioButton3" name="radioButton"/>
                                            <label
                                                style={{
                                                marginRight: '20px'
                                            }}
                                                for="Student">General Cargo</label>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-6">

                                        <label
                                            style={{
                                            marginRight: '20px'
                                        }}
                                            for="Student">Departure/Arrival date:</label>
                                        <TextField
                                            id="date"
                                            type="date"
                                            min={this.state.currentDate}
                                            defaultValue={this.state.currentDate}
                                            InputLabelProps={{
                                            shrink: true
                                        }}/>
                                    </div>
                                    <div className="col-6">

                                        <label
                                            style={{
                                            marginRight: '20px'
                                        }}
                                            for="Student">Until:</label>
                                        <TextField
                                            id="date"
                                            type="date"
                                            defaultValue="2018-05-08"
                                            style={{
                                            marginRight: '20px'
                                        }}
                                            InputLabelProps={{
                                            shrink: true
                                        }}/>
                                        <br/>
                                        <br/>
                                    </div>
                                </div>

                                <Button
                                    variant="raised"
                                    onClick={this.nextRoute}
                                    style={{
                                    background: '#29487D',
                                    color: '#fff'
                                }}
                                    component="span">
                                    Search
                                </Button>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default Default;