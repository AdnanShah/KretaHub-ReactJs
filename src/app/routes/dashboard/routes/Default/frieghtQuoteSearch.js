import React from 'react';
import IconButton from 'material-ui/IconButton';
import data from './jsonDataSource/tabledata.json';
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
import countries from './jsonDataSource/countries.json';
import stations from './jsonDataSource/stations.json';
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
// const data = [     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// createData('Ice cream sandwich', 237, 9.0, 37, 4.3),     createData('Eclair',
// 262, 16.0, 24, 6.0),     createData('Cupcake', 305, 3.7, 67, 4.3),
// createData('Gingerbread', 356, 16.0, 49, 3.9) ];
let id = 0;
function createData(name, calories, fat, carbs, protein, field6, field7) {
    id += 1;
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
        field6,
        field7
    };
}
class FreightSearch extends React.Component {

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

    // componentDidMount() { }
    handleDetails = () => {
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
    render() {
        try {
            this.props.location.state.key.country1
        } catch (err) {
            //    next()
        }

        console.log(this.props.location.state.key);
        const {anchorEl, menuState, currentDate} = this.state;
        const {classes} = this.props;
        console.log(this.state.currentDate);
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="jr-card p-0">
                            <div className="jr-card-header pt-3 px-4">
                                <h2><IntlMessages id="Freight Quote Search"/></h2>
                            </div>
                            <div className="col">

                                <div class="form-group">
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
                                        label="Select Country"
                                        value={this.props.location.state.key.country1}
                                        onChange={this
                                        .handleChange
                                        .bind(this, 'country1')}
                                        SelectProps={{}}
                                        helperText="Please select your city"
                                        margin="normal">
                                        {stations.map(countrie => (
                                            <MenuItem key={countrie.id} value={countrie.field}>
                                                {countrie.field}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <label
                                        style={{
                                        marginRight: '20px'
                                    }}
                                        for="Student">Arrival:</label>
                                    <TextField
                                        id="city"
                                        select
                                        label="Select Country"
                                        value={this.props.location.state.key.country2}
                                        onChange={this.handleChange2('country2')}
                                        SelectProps={{}}
                                        helperText="Please select your city"
                                        margin="normal">
                                        {stations.map(countrie => (
                                            <MenuItem key={countrie.id} value={countrie.field}>
                                                {countrie.field}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                            </div>
                            <div className="col">

                                <form>
                                    <div id="group1">
                                        <label
                                            style={{
                                            marginRight: '20px'
                                        }}
                                            for="Student">Freight type:</label>
                                        <input type="radio" value="group1" name="Umer "/>
                                        <label
                                            style={{
                                            marginRight: '20px'
                                        }}
                                            for="Student">FCL</label>
                                        <input type="radio" value="group1" name="group1"/>
                                        <label
                                            style={{
                                            marginRight: '20px'
                                        }}
                                            for="Student">LCL</label>
                                        <input type="radio" value="group1" name="group1"/>
                                        <label
                                            style={{
                                            marginRight: '20px'
                                        }}
                                            for="Student">General Cargo</label>
                                    </div>

                                </form>
                                <br/>
                                <label
                                    style={{
                                    marginRight: '20px'
                                }}
                                    for="Student">Departure/Arrival date:</label>
                                {/* <DateFormatInput name='date-input'
                               // min={Date}
                                value={currentDate}
                                onChange={this.onChange}
                                fullWidth='false'
                                /> */}
                                <TextField
                                    id="date"
                                    type="date"
                                    min={this.props.location.state.key.currentDate}
                                    defaultValue={this.props.location.state.key.currentDate}
                                    value={this.props.location.state.key.currentDate}
                                    InputLabelProps={{
                                    shrink: true
                                }}/>
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
                                <Link
                                    to={{
                                    pathname: 'freightDetail'
                                }}>
                                    <Button
                                        variant="raised"
                                        style={{
                                        background: '#29487D',
                                        color: '#fff'
                                    }}
                                        component="span">Change Search
                                    </Button>
                                </Link>

                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-responsive-material">

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>{data[0].head1}</TableCell>
                                <TableCell >{data[0].head2}</TableCell>
                                <TableCell >{data[0].head3}</TableCell>
                                <TableCell >{data[0].head4}</TableCell>
                                <TableCell >{data[0].head5}</TableCell>
                                <TableCell >{data[0].head6}</TableCell>
                                <TableCell >{data[0].head7}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((n, idx) => {
                                return (
                                    <TableRow key={idx}>
                                        <TableCell>{n.field1}-{n.field2}</TableCell>
                                        <TableCell>{n.field3}-{n.field4}</TableCell>
                                        <TableCell>{n.field5}</TableCell>
                                        <TableCell >{n.field6}</TableCell>
                                        <TableCell >{n.field7}</TableCell>
                                        <TableCell >{n.field7}</TableCell>
                                        <TableCell >{n.field7}</TableCell>
                                        <Link
                                            to={{
                                            pathname: 'freightDetail',
                                            state: {
                                                key: idx
                                            }
                                        }}>
                                            <TableCell>
                                                <Button
                                                    variant="raised"
                                                    style={{
                                                    background: '#29487D',
                                                    color: '#fff'
                                                }}
                                                    component="span">Details
                                                </Button>
                                            </TableCell>
                                        </Link>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>

        );
    }
}

export default FreightSearch;
