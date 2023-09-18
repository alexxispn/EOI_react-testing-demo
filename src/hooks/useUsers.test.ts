import { useUsers } from "./useUsers";
import { renderHook } from '@testing-library/react-hooks'
import * as userService from '../services/userService';

describe('useUsers', () => {
    describe('When the component is mounted', () => {
        test('should return 0 on first update and five users on second update', async () => {
            const { result, waitForNextUpdate } = renderHook(() => useUsers());
            const { users: _users } = result.current

            expect(_users.length).toBe(0)

            await waitForNextUpdate()
            const { users } = result.current;

            expect(users.length).toBe(5)
        })
    })
    test('should return empty array on fetch error', async () => {
        jest.spyOn(userService, 'getUsers').mockRejectedValue(new Error('error'));
        const { result } = renderHook(() => useUsers());
        const { users: _users } = result.current
        expect(_users).toEqual([]);
    })


});


