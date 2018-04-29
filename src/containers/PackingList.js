import React from "react";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import { Link } from "react-router-dom";
import Icon from "material-ui/Icon";
import Close from 'material-ui-icons/Close';
import Done from 'material-ui-icons/Done';

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

const divStyle = {
  overflowY: "scroll"
};

class PackingList extends React.Component {
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
      <div style={divStyle} className="container-fluid">
        <br />

        <Paper>
          <h1 className="text-center p-3">Packing List</h1>
          <form noValidate autoComplete="off">
            <div>
              {this.state.PickLists.map((PickList, idx) => (
                <div>
                  <h2
                    className="col offset-1"
                    style={{
                      width: "80%",
                      color: "#000",
                      background: "#4267B2"
                    }}
                  >
                    Container {`${idx + 1}`}: 20RF
                  </h2>
                  <div className="row">
                    <div className="col-10 offset-1">
                      <div className="table-responsive-material">
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Type*</TableCell>
                              <TableCell numeric>Name*</TableCell>
                              <TableCell numeric>Description</TableCell>
                              <TableCell numeric>Qty</TableCell>
                              <TableCell numeric>Unit*</TableCell>
                              <TableCell numeric>Weight</TableCell>
                              <TableCell numeric>Size (Length)</TableCell>
                              <TableCell numeric>Size (Width)</TableCell>
                              <TableCell numeric>Size (Height)</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.map(n => {
                              return (
                                <TableRow key={n.id}>
                                  <TableCell>{n.type}</TableCell>
                                  <TableCell numeric>{n.name}</TableCell>
                                  <TableCell numeric>{n.description}</TableCell>
                                  <TableCell numeric>{n.qty}</TableCell>
                                  <TableCell numeric>{n.unit}</TableCell>
                                  <TableCell numeric>{n.weight}</TableCell>
                                  <TableCell numeric>{n.length}</TableCell>
                                  <TableCell numeric>{n.width}</TableCell>
                                  <TableCell numeric>{n.width}</TableCell>
                                  <Button
                                    className='ml-1'
                                    variant="fab"
                                    mini
                                    color="secondary"
                                    aria-label="add"
                                  >
                                    <Icon>add_circle</Icon>
                                  </Button>
                                  <Button
                                    className='ml-1'
                                    variant="fab"
                                    mini
                                    color="primary"
                                    aria-label="add"
                                  >
                                    <Icon>add_circle</Icon>
                                  </Button>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <br />
            </div>
            <br />
            <div>
              {this.state.PickLists.map((PickList, idx) => (
                <div>
                  <h2
                    className="col offset-1"
                    style={{
                      width: "80%",
                      color: "#000",
                      background: "#4267B2"
                    }}
                  >
                    Container {`${idx + 1}`}: 20RF
                  </h2>
                  <div className="row">
                    <div className="col-10 offset-1">
                      <div className="table-responsive-material">
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Type*</TableCell>
                              <TableCell numeric>Name*</TableCell>
                              <TableCell numeric>Description</TableCell>
                              <TableCell numeric>Qty</TableCell>
                              <TableCell numeric>Unit*</TableCell>
                              <TableCell numeric>Weight</TableCell>
                              <TableCell numeric>Size (Length)</TableCell>
                              <TableCell numeric>Size (Width)</TableCell>
                              <TableCell numeric>Size (Height)</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.map(n => {
                              return (
                                <TableRow key={n.id}>
                                  <TableCell>{n.type}</TableCell>
                                  <TableCell numeric>{n.name}</TableCell>
                                  <TableCell numeric>{n.description}</TableCell>
                                  <TableCell numeric>{n.qty}</TableCell>
                                  <TableCell numeric>{n.unit}</TableCell>
                                  <TableCell numeric>{n.weight}</TableCell>
                                  <TableCell numeric>{n.length}</TableCell>
                                  <TableCell numeric>{n.width}</TableCell>
                                  <TableCell numeric>{n.width}</TableCell>
                                  <Button
                                    className='ml-1'
                                    variant="fab"
                                    mini
                                    color="secondary"
                                    aria-label="add"
                                  >
                                    <Icon>add_circle</Icon>
                                  </Button>
                                  <Button
                                    className='ml-1'
                                    variant="fab"
                                    mini
                                    color="primary"
                                    aria-label="add"
                                  >
                                    <Icon>add_circle</Icon>
                                  </Button>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <br />
            </div>
            <br />
            <div>
              {this.state.PickLists.map((PickList, idx) => (
                <div>
                  <h2
                    className="col offset-1"
                    style={{
                      width: "80%",
                      color: "#000",
                      background: "#4267B2"
                    }}
                  >
                    Container {`${idx + 1}`}: 20RF
                  </h2>
                  <div className="row">
                    <div className="col-10 offset-1">
                      <div className="table-responsive-material">
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Type*</TableCell>
                              <TableCell numeric>Name*</TableCell>
                              <TableCell numeric>Description</TableCell>
                              <TableCell numeric>Qty</TableCell>
                              <TableCell numeric>Unit*</TableCell>
                              <TableCell numeric>Weight</TableCell>
                              <TableCell numeric>Size (Length)</TableCell>
                              <TableCell numeric>Size (Width)</TableCell>
                              <TableCell numeric>Size (Height)</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.map(n => {
                              return (
                                <TableRow key={n.id}>
                                  <TableCell>{n.type}</TableCell>
                                  <TableCell numeric>{n.name}</TableCell>
                                  <TableCell numeric>{n.description}</TableCell>
                                  <TableCell numeric>{n.qty}</TableCell>
                                  <TableCell numeric>{n.unit}</TableCell>
                                  <TableCell numeric>{n.weight}</TableCell>
                                  <TableCell numeric>{n.length}</TableCell>
                                  <TableCell numeric>{n.width}</TableCell>
                                  <TableCell numeric>{n.width}</TableCell>
                                  <Button
                                    className='ml-1'
                                    variant="fab"
                                    mini
                                    color="secondary"
                                    aria-label="add"
                                  >
                                    <Icon>add_circle</Icon>
                                  </Button>
                                  <Button
                                    className='ml-1'
                                    variant="fab"
                                    mini
                                    color="primary"
                                    aria-label="add"
                                  >
                                    <Icon>add_circle</Icon>
                                  </Button>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <br />
              <div className="row align-items-center justify-content-center">
                <Link to="/mainthankyou">
                  <Button
                    variant="raised"
                    style={{
                      background: "#29487D",
                      color: "#fff"
                    }}
                  >
                    FINISH BOOKING
                  </Button>
                </Link>
                <br />
                <br />
                <br />
              </div>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

export default PackingList;
