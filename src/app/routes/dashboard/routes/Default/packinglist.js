import React from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import IntlMessages from "util/IntlMessages";
import MenuItem from "material-ui/Menu/MenuItem";
import stations from "./jsonDataSource/stations.json";
import DateFormatInput from "material-ui-next-datepicker";
import { Link } from "react-router-dom";
import Tour from "../../../../../components/Tour/index";
import { DatePicker } from "material-ui-pickers";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Icon from "material-ui/Icon";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

let id = 0;
function createData(
  type,
  name,
  description,
  qty,
  unit,
  weight,
  length,
  width,
  height
) {
  id += 1;
  return {
    id,
    type,
    name,
    description,
    qty,
    unit,
    weight,
    length,
    width,
    height
  };
}

const data = [
  createData(
    "Non-DG",
    "Rice",
    "Rice",
    1,
    "bags",
    "1000kg",
    "2mx",
    "1mx",
    "2.5m"
  )
];

class Default extends React.Component {
  constructor() {
    super();
    this.state = {
      PickLists: [
        {
          type: ""
        }
      ]
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <br />
        <Paper>
          <h1 className="text-center p-3">Packing List</h1>
          
        </Paper>
      </div>
    );
  }
}

export default Default;
