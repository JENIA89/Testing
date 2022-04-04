import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios'
import Users from './Users';

jest.mock('axios')

describe('USERS TEST', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                    },
                    {
                        "id": 2,
                        "name": "Ervin Howell",
                        "username": "Antonette",
                    }
                ]
        }
    })
    test('get async users', async () => {
        axios.get.mockReturnValue(response)
        render(<Users />);
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(2)
        screen.debug()
      });

      
})
