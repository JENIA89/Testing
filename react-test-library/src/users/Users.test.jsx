import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Users from './Users';
import AppRouter from '../router/AppRouter';

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
    // afterEach(()=>{
    //     jest.clearAllMocks()
    // })
    test('get async users', async () => {
        axios.get.mockReturnValue(response)
        render(<Users />);
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(2)
        screen.debug()
      });

    // test('test redirect', async () => {
    //     axios.get.mockReturnValue(response)
    //     render(<MemoryRouter>
    //             <AppRouter/>
    //             <Users />
    //         </MemoryRouter>);
    //     const users = await screen.findAllByTestId('user-item')
    //     expect(users.length).toBe(2)
    //     userEvent.click(users[0])
    //     expect(screen.getByTestId('user-page')).toBeInTheDocument()
    //   });  
})
