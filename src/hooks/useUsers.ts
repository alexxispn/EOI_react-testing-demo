import { useState, useEffect } from 'react';
import { User } from "../interfaces/User"
import { getUsers } from '../services/userService';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

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


  return { users }
}
