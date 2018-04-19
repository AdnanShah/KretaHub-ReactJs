import React from "react";
import IconButton from "material-ui/IconButton";
import Paper from "material-ui/Paper";
import data from "./jsonDataSource/tabledata.json";
import TextField from "material-ui/TextField";
import {
  cardData,
  cardData1,
  cardData2,
  connections,
  data1,
  expanseData,
  todoData
} from "../data";
import ReportBox from "components/ReportBox/index";
import InfoCard from "components/InfoCard";
import InFoWithBgImage from "components/InFoWithBgImage";
import UserDetailCard from "components/UserDetailCard";
import SimpleToDo from "components/ToDoCard/index";
import ChartCard from "components/dashboard/Common/ChartCard";
import SiteVisitor from "components/dashboard/Common/SiteVisitor";
import CardBox from "components/CardBox";
import UserDetailTable from "components/dashboard/Common/UserDetailTable";
import UserProfileCard from "components/dashboard/Common/userProfileCard/UserProfileCard";
import MarketingTable from "components/dashboard/Common/MarketingTable";
import PhotoCollage from "components/dashboard/Common/PhotoCollage/index";
import LatestNotifications from "components/dashboard/Common/LatestNotifications";
import RecentActivities from "components/dashboard/Common/RecentActivities/index";
import { dailyFeedData, projects, recentList } from "../Intranet/data";
import ProjectsList from "components/dashboard/Common/ProjectsList";
import YourDailyFeed from "components/dashboard/Common/DailyFeed/index";
import TimerView from "components/dashboard/Common/TimerView/index";
import SimpleMap from "app/routes/map/routes/simple/Components/SimpleMap";
import ContactCard from "components/Cards/Contact";
import SimpleCard from "components/Cards/Sample/index";
import PopularProduct from "components/dashboard/Common/PopularProduct";
import WeatherDetail from "components/Weather/WeatherDetail";
import LatestPosts from "components/dashboard/Common/LatestPosts/index";

import {
  announcementsNotification,
  appNotification,
  latestPostList,
  marketingData,
  pieChartData,
  products
} from "app/routes/dashboard/routes/Default/data";

import Button from "material-ui/Button";
import CafeCard from "components/Cards/Cafe/index";
import Statistics from "components/dashboard/default/Statistics";
import ContainerHeader from "components/ContainerHeader/index";
import CardMenu from "components/dashboard/Common/CardMenu";
import Team from "app/routes/extraPages/routes/aboutUs/Componets/Team";
import CardHeader from "components/dashboard/Common/CardHeader/index";
import IntlMessages from "util/IntlMessages";
import MenuItem from "material-ui/Menu/MenuItem";
import countries from "./jsonDataSource/countries.json";
import stations from "./jsonDataSource/stations.json";
import DateFormatInput from "material-ui-next-datepicker";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
import { Link } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";

const label = {
  /* Other styling..*/
  textAlign: "right",
  clear: "both",
  marginRight: "15px"
};
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});
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
    this.setState({ [name]: event.target.value });
  };
  handleChange2 = name => event => {
    console.log("name", name, "event", event.target.value);
    this.setState({ [name]: event.target.value });
  };
  onOptionMenuSelect = event => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ menuState: false });
  };

  constructor() {
    super();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    this.state = {
      anchorEl: undefined,
      menuState: false,
      country1: "Algeria",
      country2: "Australia",
      currentDate: yyyy + "-" + mm + "-" + dd
    };
  }
  columns = [
    {
      Header: "Estimated Time of Departure (ETD)",
      accessor: "field1"
    },
    {
      Header: "Estimated Time of Arrival (ETA)",
      accessor: "field3"
    },
    {
      Header: "Train",
      accessor: "field5"
    },
    {
      Header: "Available Capacity",
      accessor: "field6"
    },
    {
      Header: "Station-to-Station",
      accessor: "field7"
    },
    {
      Header: "Door-to-Station",
      accessor: "field7"
    },
    {
      Header: "Door-to-Door",
      accessor: "field7"
    },
    {
      Header: "",
      accessor: "age",
      Cell: ({ value }) => (
        <Link
          to={{
            pathname: "freightDetail"
          }}
        >
          <Button
            variant="raised"
            style={{
              background: "#29487D",
              color: "#fff"
            }}
            component="span"
          >
            Details
          </Button>
        </Link>
      )
    }
  ];

  render() {
    // try {
    //   this.props.location.state.key;
    // } catch (err) {
    //      next()
    // }

    // console.log(this.props.location.state.key);
    const { anchorEl, menuState, currentDate } = this.state;
    const { classes } = this.props;
    // console.log(this.state.currentDate);

    return (
      <Paper>
        <div className="container">
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <div className="jr-card-header pt-3 px-4">
                    <h2>
                      <IntlMessages id="Freight Quote Search" />
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label
                          style={{
                            marginRight: "20px"
                          }}
                          for="Student"
                        >
                          Departure:
                        </label>
                        <TextField
                          id="city"
                          select
                          style={{
                            marginRight: "85px"
                          }}
                          label="Select Country"
                          value={this.props.location.state.key.country1}
                          onChange={this.handleChange.bind(this, "country1")}
                          SelectProps={{}}
                          helperText="Please select your city"
                          margin="normal"
                        >
                          {stations.map(countrie => (
                            <MenuItem key={countrie.id} value={countrie.field}>
                              {countrie.field}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                    </div>
                    <div className="col-6">
                      <label
                        style={{
                          marginRight: "20px"
                        }}
                        for="Student"
                      >
                        Arrival:
                      </label>
                      <TextField
                        id="city"
                        select
                        label="Select Country"
                        value={this.props.location.state.key.country2}
                        onChange={this.handleChange2("country2")}
                        SelectProps={{}}
                        helperText="Please select your city"
                        margin="normal"
                      >
                        {stations.map(countrie => (
                          <MenuItem key={countrie.id} value={countrie.field}>
                            {countrie.field}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 ">
                      <div id="group1">
                        <label
                          style={{
                            marginRight: "20px"
                          }}
                          for="Student"
                        >
                          Freight type:
                        </label>
                        <input
                          type="radio"
                          checked={
                            this.props.location.state.key.radioButton ===
                            "radioButton1"
                          }
                          name="radioButton1"
                        />
                        <label
                          style={{
                            marginRight: "20px"
                          }}
                          for="Student"
                        >
                          FCL
                        </label>
                        <input
                          type="radio"
                          checked={
                            this.props.location.state.key.radioButton ===
                            "radioButton2"
                          }
                          name="radioButton2"
                        />
                        <label
                          style={{
                            marginRight: "20px"
                          }}
                          for="Student"
                        >
                          LCL
                        </label>
                        <input
                          type="radio"
                          checked={
                            this.props.location.state.key.radioButton ===
                            "radioButton3"
                          }
                          name="radioButton3"
                        />
                        <label
                          style={{
                            marginRight: "20px"
                          }}
                          for="Student"
                        >
                          General Cargo
                        </label>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-6">
                      <label
                        style={{
                          marginRight: "20px"
                        }}
                        for="Student"
                      >
                        Departure/Arrival date:
                      </label>
                      <TextField
                        id="date"
                        type="date"
                        min={this.state.currentDate}
                        defaultValue={this.state.currentDate}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </div>
                    <div className="col-6">
                      <label
                        style={{
                          marginRight: "20px"
                        }}
                        for="Student"
                      >
                        Until:
                      </label>
                      <TextField
                        id="date"
                        type="date"
                        defaultValue="2018-05-08"
                        style={{
                          marginRight: "20px"
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to={{
                  pathname: "freightDetail"
                }}
              >
                <Button
                  variant="raised"
                  style={{
                    background: "#29487D",
                    color: "#fff"
                  }}
                  component="span"
                >
                  Change Search
                </Button>
              </Link>
            </div>
            <br />
            <br />
            <hr />
            <ReactTable
              data={data}
              columns={this.columns}
              defaultPageSize={10}
            />
          </div>
        </div>
      </Paper>
    );
  }
}

export default FreightSearch;
