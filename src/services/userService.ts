import { User } from "../interfaces/User"

export const getUsers = async (limit = 5): Promise<User[]> => {
    const users = await fetch(

        `https://jsonplaceholder.typicode.com/users?_limit=${limit}`, {
        method: 'GET',

    }
    );
    return users.json()
}

/*

export const getUserbyId = async (id : number): Promise<User> => {
    const user = await fetch(
        //https://jsonplaceholder.typicode.com/users/1

        `https://jsonplaceholder.typicode.com/users/=${id}`, {
        method: 'GET',

    }
    );
    return user.json()
}


*/
