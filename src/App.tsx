import React from 'react'
import './App.css'
import { UsersList } from './components/UsersList'
import { useUsers } from './hooks/useUsers'

function App() {
  const { users, handleAddUser } = useUsers()

  return (
    <>
      <UsersList users={users} />
      <button onClick={handleAddUser}>
        Add User
      </button>
    </>
  )
}

export default App
