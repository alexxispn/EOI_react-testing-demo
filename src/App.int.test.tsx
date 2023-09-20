import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

describe("App", () => {
    describe("users list", () => {
        test("should render with no users", async () => {
            render(<App/>)
            await waitFor(() => {
                const noUsers = screen.getByText("There are no users")
                expect(noUsers).toBeInTheDocument()
            })
        })
        test("should render with five users", async () => {
            render(<App/>)
            await waitFor(() => {
                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(5)
            })
        })
    })
    describe("addButton", () => {
        test("should render a new user when we click", async () => {
            render(<App/>)
            const addButton = screen.getByRole("button", {name: "Add User"})
            await waitFor(async () => {
                userEvent.click(addButton)
                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(6)
            })
        })
        test("should render a maximum of 10 users", async () => {
            render(<App/>)
            const addButton = screen.getByText('Add User');
            await waitFor(() => {
                userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(6)
            })
            await waitFor(() => {
                userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(7)
            })
            await waitFor(() => {
                userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(8)
            })
            await waitFor(() => {
                userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(9)
            })
            await waitFor(() => {
                userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(10)
            })
            await waitFor(() => {
                userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(10)
            })
        })
    })
})
