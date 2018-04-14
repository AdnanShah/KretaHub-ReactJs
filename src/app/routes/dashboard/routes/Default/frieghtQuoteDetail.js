import React from 'react';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
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
import jsonData from './jsonDataSource/ATANotice.json';
import DateFormatInput from 'material-ui-next-datepicker'
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
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

const data = [
    createData('20RF', 'IDR 2,200,000', '2', '	of 10', 'IDR 4,400,000'),
    createData('20TK', 'IDR 2,200,000', null, 'of 10', null),
    createData('20GP', 'IDR 2,200,000', null, 'of 10', null),
    createData('40RF', 'IDR 4,200,000', null, 'of 5', null),
    createData('40GP', 'IDR 4,200,000', '1', 'of 5', 'IDR 4,200,000'),
    createData('Ancillary Price', null, null, null, 'IDR 100,000'),
    createData('Total Price', null, null, null, ' IDR 8,700,000 ')
];

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein
    };
}
class Freightdetail extends React.Component {

    handleChange = name => event => {
        console.log("name", name, "event", event.target.value);
        this.setState({[name]: event.target.value});
    };
    handleChange2 = name => event => {
        console.log("name", name, "event", event.target.value);
        this.setState({[name]: event.target.value});
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
            currentDate: yyyy + '-' + mm + '-' + dd
        }

    }
    onChange = (date) => {
        console.log(date)
        this.setState({date})
    }

    render() {
        const {anchorEl, menuState, currentDate} = this.state;
        const {classes} = this.props;
        console.log(this.state.currentDate);
        return (
            <Paper>
                <div className="container">

                    <div className="row">
                        <div className="col">
                            <div className="jr-card-header pt-3 px-4">
                                <h2><IntlMessages id="Freight Quote Details"/></h2>
                            </div>
                            <div class="container">
                                <div className="row">
                                    <label className="col-md-4 col-12" for="email">Order :</label>
                                    <div className="col-md-4 col-12">
                                        <p className="">{jsonData[0].field1}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-4 col-12" for="email">Shipper :</label>
                                    <div className="col-md-4 col-12">
                                        <p className="">{jsonData[0].shipper}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-4 col-12" for="email">Carrier :</label>
                                    <div className="col-md-4 col-12">
                                        <p className="">{jsonData[0].carrier}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <label className="col-md-3 col-12" for="email">Departure :</label>
                                    <div className="col-md-3 col-12">
                                        <p className="">{jsonData[0].line1}</p>
                                    </div>
                                    <label className="col-md-3 col-12" for="email">Arrival :</label>
                                    <div className="col-md-3 col-12">
                                        <p className="">{jsonData[0].line5}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <label className="col-md-3 col-12" for="email">Estimated Departure Time:</label>
                                    <div className="col-md-3 col-12">
                                        <input
                                            id="date"
                                            label="Date"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                            shrink: true
                                        }}/>

                                    </div>
                                    <label className="col-md-3 col-12" for="email">Trip Length :</label>
                                    <div className="col-md-3 col-12">
                                        <p className="">{jsonData[0].line6}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <label className="col-md-3 col-12" for="email">Actual Departure Time :</label>
                                    <div className="col-md-3 col-12">
                                        <input
                                            id="date"
                                            label="Date"
                                            type="date"
                                            defaultValue="2018-04-20"
                                            InputLabelProps={{
                                            shrink: true
                                        }}/>
                                    </div>
                                    <label className="col-md-3 col-12" for="email">Estimated Arrival Time :</label>
                                    <div className="col-md-3 col-12">
                                        <input
                                            id="date"
                                            label="Date"
                                            type="date"
                                            defaultValue="2018-04-21"
                                            InputLabelProps={{
                                            shrink: true
                                        }}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <label className="col-md-3 col-12" for="email">Train Name:</label>
                                    <div className="col-md-3 col-12">
                                        <p className="">{jsonData[0].line4}</p>
                                    </div>
                                    <label className="col-md-3 col-12" for="email">Train Number :</label>
                                    <div className="col-md-3 col-12">
                                        <p className="">{jsonData[0].line8}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <label className="col-md-4 col-12" for="email">Terms and Conditions:</label>
                                    <div className="col-md-4 col-12">
                                        <textarea
                                            className="border border-primary rounded"
                                            rows="3"
                                            style={{
                                            minWidth: '100%'
                                        }}>{jsonData[0].line9}</textarea>
                                    </div>
                                </div>

                                <div className="row">
                                    <label className="col-md-4 col-12" for="email">Incoterm :</label>
                                    <div className="col-md-4 col-12">
                                        <p className="border border-primary rounded">{jsonData[0].line10}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="table-responsive-material">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Container type</TableCell>
                                            <TableCell numeric>Price</TableCell>
                                            <TableCell numeric>Qty</TableCell>
                                            <TableCell numeric>Capacity</TableCell>
                                            <TableCell numeric>Subtotal</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map(n => {
                                            return (
                                                <TableRow key={n.id}>
                                                    <TableCell>{n.name}</TableCell>
                                                    <TableCell numeric>{n.calories}</TableCell>
                                                    <TableCell numeric>{n.fat}</TableCell>
                                                    <TableCell numeric>{n.carbs}</TableCell>
                                                    <TableCell numeric>{n.protein}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </div>
                            <br/>
                            <br/>
                            <div className="row align-items-center justify-content-center">
                                <Link to="/packinglist">
                                    <Button
                                        variant="raised"
                                        style={{
                                        background: '#29487D',
                                        color: '#fff'
                                    }}
                                        component="span">
                                        BOOK NOW
                                    </Button>
                                </Link>
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

export default Freightdetail;