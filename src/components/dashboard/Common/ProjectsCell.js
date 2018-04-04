import React from 'react';
import IconButton from 'material-ui/IconButton';
import {Badge} from 'reactstrap';

const ProjectsCell = ({data}) => {
    const {id, name, date, status, color} = data;
    return (

        <tr
            tabIndex={-1}
            key={id}>

            <td className="max-width-100">
                <h4 className="text-truncate mb-0">{name}</h4>
            </td>

            <td className="text-center p-1">{date}</td>
            <td className="text-center">
                <Badge className="d-block" color={color}>{status}</Badge>
            </td>
            <td className="text-right">
                <IconButton className="size-30"><i className="zmdi zmdi-more-vert text-grey" /></IconButton>
            </td>
        </tr>

    );
};

export default ProjectsCell;
