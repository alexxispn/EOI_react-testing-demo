import React from 'react'
import { render, screen } from '@testing-library/react'
import { UsersList } from './UsersList'
import { User } from "../interfaces/User"



describe('UsersList', () => {
    describe('When there are users', () => {

        test('should render user list', async () => {
            const mockResponse: any =
                [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]
            render(<UsersList users={mockResponse} />);

            const userElement1 = await screen.findByText('User 1');
            const userElement2 = await screen.findByText('User 2');

            expect(userElement1).toBeInTheDocument();
            expect(userElement2).toBeInTheDocument();
        })

    });
    describe('When there are no users', () => {
        test('Render user data', async () => {
            const mockResponse: User[] = []

            render(<UsersList users={mockResponse} />);

            const noUsersElement = await screen.findByText('There are no users')

            expect(noUsersElement).toBeInTheDocument();
        });
    });
})
