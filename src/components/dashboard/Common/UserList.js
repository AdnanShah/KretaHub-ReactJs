import React from 'react';
import UserCell from './UserCell';


const UserList = ({users}) => {
    return (
        <div className="pt-4 pb-1">
            {users.map((user, index) => {
                return (
                    <UserCell key={user.id + index} user={user}/>
                );
            })}
        </div>
    );

};

export default UserList;