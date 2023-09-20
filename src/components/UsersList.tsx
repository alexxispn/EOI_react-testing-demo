import { User } from "../interfaces/User"

export const UsersList = ({ users }: { users: User[] }) => {

  return (
    <main>
      <h1>Users List</h1>
      {users.length === 0
        ? <h2>There are no users</h2>
        :
        <ul>
          {users.map((user) => (<li key={user.id}>{user.name}</li>))}
        </ul>
      }
    </main>
  )
}
