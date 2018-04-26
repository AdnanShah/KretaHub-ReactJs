import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import IntlMessages from 'util/IntlMessages';
import citys from './jsonDataSource/province-ID.json';
import locality from './jsonDataSource/locality-ID.json';
import countries from './jsonDataSource/countries.json';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import Icon from 'material-ui/Icon';


let id = 0;
function createData(type, name, description, qty, unit, weight, length, width, height) {
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

const data = [createData('Non-DG', 'Rice', 'Rice', 1, 'bags', '1000kg', '2mx', '1mx', '2.5m')];

const divStyle = {
    overflowY: 'scroll'
};

class PackingList extends React.Component {
    constructor() {
        super();
        this.state = {
            type: '',
            PickLists: [
                {
                    type: ''
                }
            ]
        };
    }

    handleNameChange = (evt) => {
        this.setState({ type: evt.target.value });
    }

    handlePickListNameChange = (idx) => (evt) => {
        const newPickLists = this
            .state
            .PickLists
            .map((PickList, sidx) => {
                if (idx !== sidx)
                    return PickList;
                return {
                    ...PickList,
                    type: evt.target.value
                };
            });

        this.setState({ PickLists: newPickLists });
    }

    handleSubmit = (evt) => {
        const { type, PickLists } = this.state;
        alert(`Incorporated: ${type} with ${PickLists.length} PickLists`);
    }

    handleAddPickList = () => {
        this.setState({
            PickLists: this
                .state
                .PickLists
                .concat([
                    {
                        type: ''
                    }
                ])
        });
    }

    handleRemovePickList = (idx) => () => {
        this.setState({
            PickLists: this
                .state
                .PickLists
                .filter((s, sidx) => idx !== sidx)
        });
    }

    render() {
        return (

            <div style={divStyle} className="container-fluid">
                <br />
                <Paper>

                    <h1 className="text-center p-5">Packing List</h1>
                    <form noValidate autoComplete="off">
                        <div>
                            {this
                                .state
                                .PickLists
                                .map((PickList, idx) => (

                                    <div>
                                        <h2 className="p-5">Container {`${idx + 1}`}: 20RF</h2>

                                        <div className="row">
                                            <div className="col-8 offset-1">
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Type</TableCell>
                                                            <TableCell numeric>Name</TableCell>
                                                            <TableCell numeric>Description</TableCell>
                                                            <TableCell numeric>Qty</TableCell>
                                                            <TableCell numeric>Unit</TableCell>
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
                                                                    <TableCell>
                                                                        <Icon color="error">
                                                                            add_circle
                                                                            </Icon>
                                                                        <Icon color="primary">
                                                                            add_circle
                                                                                 </Icon>
                                                                    </TableCell>
                                                                </TableRow>
                                                            );
                                                        })}
                                                    </TableBody>
                                                </Table>
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
                                            background: '#29487D',
                                            color: '#fff'
                                        }}>
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

        )
    }
}

export default PackingList;