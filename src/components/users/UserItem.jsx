import React from 'react';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="col-6 col-md-3 m-3">
      <div className="card" style={{ width: '18rem' }}>
        <img src={avatar_url} className="card-img-top" alt="avatar" />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <a href={html_url} className="btn btn-primary">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
