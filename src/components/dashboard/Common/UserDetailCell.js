import React from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import {Badge} from 'reactstrap';

const UserDetailCell = ({data}) => {
    const {id, name, detail, image, about, color} = data;
    return (
        <tr
            tabIndex={-1}
            key={id}>
            <td>
                <div className="user-profile d-flex flex-row align-items-center">
                    <Avatar
                        alt={name}
                        src={image}
                        className="user-avatar avatar-shadow mr-2"
                    />
                    <div className="user-detail">
                        <h4 className="user-name text-capitalize">{name} </h4>
                        <p className="user-description">{about}</p>
                    </div>
                </div>
            </td>
            <td className="text-right">
                <Badge className="d-block text-uppercase" href="javascript:void(0)" color={color}>{detail}</Badge>
            </td>
            <td className="text-right p-0">
                <IconButton className="size-30"><i className="zmdi zmdi-more-vert"/></IconButton>
            </td>
        </tr>

    );
};

export default UserDetailCell;
