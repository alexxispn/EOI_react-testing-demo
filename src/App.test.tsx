import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

describe("App", () => {
    describe("users list", () => {
        test("should render with five users", async () => {
            render(<App />)
            await waitFor(() => {
                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(5)
            })
        })
    })
    describe("addButton", () => {
        test("should render a new user when we click", async () => {
            render(<App />)
            const addButton = screen.getByText('Add User');
            await waitFor(async () => {
                await userEvent.click(addButton)
                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(6)
            })
        })
        test("should render a maximum of 10 users", async () => {
            render(<App />)
            const addButton = screen.getByText('Add User');
            await waitFor(async () => {
                await userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(6)
            })
            await waitFor(async () => {
                await userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(7)
            })
            await waitFor(async () => {
                await userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(8)
            })
            await waitFor(async () => {
                await userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(9)
            })
            await waitFor(async () => {
                await userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(10)
            })
            await waitFor(async () => {
                await userEvent.click(addButton)

                const users = screen.getAllByRole("listitem")
                expect(users.length).toBe(10)
            })
        })
    })
})
