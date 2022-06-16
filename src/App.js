import { Fragment, useState } from 'react';
import Navbar from './components/layout/Navbar';
import { users as githubUsers } from './components/users/usersData';
import Users from './components/users/Users';
import Search from './components/users/Search';

function App() {
  const [users, setUsers] = useState(githubUsers);

  const handleSubmit = text => {
    console.log(text);
    setUsers(githubUsers.filter(user => user.login === text));
  };
  return (
    <Fragment>
      <Navbar title="Github Users" />
      <Search handleSubmit={handleSubmit} />
      <Users users={users} />
    </Fragment>
  );
}

export default App;
