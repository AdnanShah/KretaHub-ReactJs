import React from 'react';
import UserDetailCell from './UserDetailCell';

const UserDetailTable = ({data}) => {

    return (
        <div className="table-responsive-material">
            <table className="default-table table-sm table remove-table-border mb-0 ">
                <tbody>
                {data.map(data => {
                    return (
                        <UserDetailCell key={data.id} data={data} />
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default UserDetailTable;