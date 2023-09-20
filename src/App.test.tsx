import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import { UsersList } from './components/UsersList';
import { useUsers } from './hooks/useUsers';
import userEvent from '@testing-library/user-event';

jest.mock('./components/UsersList', () => ({
    UsersList: jest.fn(() => {
        return <div>::UserList::</div>
    })
}))

const mockHandleAddUser = jest.fn()

jest.mock('./hooks/useUsers', () => ({
    useUsers: jest.fn(() => ({
        users: ['::user1::'],
        handleAddUser: mockHandleAddUser
    }))
}))

describe("App", () => {
    test("should call UserList component", () => {
        render(<App />)
        expect(useUsers).toBeCalled()
        expect(UsersList).toBeCalled()
        expect(UsersList).toBeCalledWith({users: ['::user1::']}, {})
        expect(screen.getByText('::UserList::')).toBeInTheDocument()
    })

    test("should be able to click on button and call handleAddUser", () => {
        render(<App />)
        const button = screen.getByText('Add User')
        userEvent.click(button)
        expect(mockHandleAddUser).toBeCalled()
    })
})
