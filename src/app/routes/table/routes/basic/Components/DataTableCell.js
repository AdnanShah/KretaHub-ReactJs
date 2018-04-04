import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import Close from 'material-ui-icons/Close';
import Done from 'material-ui-icons/Done';

import {TableCell, TableRow,} from 'material-ui/Table';


const DataTableCell = (props) => {
    return (
        <TableRow
            hover
            role="checkbox"
            tabIndex={-1}
            key={props.data.id}
            selected={true}
        >
            <TableCell>
                <Checkbox color="primary" key={props.data.id} value="checkedF"/>
            </TableCell>

            <TableCell>
                <Avatar
                    alt={props.data.name}
                    src={props.data.image}
                    style={{
                        width: 32,
                        height: 32,
                        textDecoration: 'none',
                    }} />
            </TableCell>
            <TableCell>{props.data.name}</TableCell>
            <TableCell>{props.data.memberFrom}</TableCell>
            <TableCell>{props.data.lastLogin}</TableCell>
            <TableCell>{props.data.role}</TableCell>
            <TableCell>{props.data.status === 'active' ? <Done color='primary'/> :
                <Close color='error'/>}</TableCell>
        </TableRow>

    );
};

export default DataTableCell;
