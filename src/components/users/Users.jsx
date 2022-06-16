import React from 'react';
import UserItem from './UserItem';

const Users = ({ users }) => {
  return (
    <div className="container">
      <div className="row">
        {users.map(user => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
