import React from 'react';
import './App.css';
import { UsersList } from './components/UsersList';
import { useUsers } from './hooks/useUsers';

function App() {
  const { users } = useUsers();

  return (
    <UsersList users={users} />
  );
}

export default App;
