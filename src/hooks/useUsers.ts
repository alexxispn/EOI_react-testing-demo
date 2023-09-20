import { useState, useEffect } from 'react';
import { User } from "../interfaces/User"
import { getUserbyId, getUsers } from '../services/userService';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = async (id: number) => {
    const user = await getUserbyId(id)
    if (user) {
      const updatedUsers = [...users, user]
      setUsers(updatedUsers as User[])
    } else {
      console.log("User not found")
    }
  }

  useEffect(() => {
    async function fetchUsers() {
      try {
        const usersResponse = await getUsers();
        setUsers(usersResponse)
      }
      catch (error) {
        console.log(`error`)
      }
    }

    fetchUsers();
  }, [])

  const handleAddUser = () => {
    if (users.length === 10) return
    addUser(users.length + 1)
  }


  return { users, handleAddUser }
}
