import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
    test('get element test', () => {
        render(<App />);
        const helloWorldElem = screen.getByText(/hello world/i);
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/input value/i);
        expect(helloWorldElem).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(input).toMatchSnapshot();
      });

      test('async test', async () => {
        render(<App />);
        // query используется в основном для подтверждения отсутствия элемента
        // const helloWorldElem = screen.queryByText(/hello2/i);
        // expect(helloWorldElem).toBeNull()
        const helloWorldElem = await screen.findByText(/data/i);
        expect(helloWorldElem).toBeInTheDocument();
        expect(helloWorldElem).toHaveStyle({color: 'red'});
      });

      test('onclick test', async () => {
        render(<App />);
        const btn = screen.getByTestId('toggle-btn');
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId('toggle-elem')).toBeNull();
      });

      test('input test', async () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/input value/i);
        expect(screen.queryByTestId('value-elem')).toContainHTML('');
        // fireEvent искуственное событие
        // fireEvent.input(input, {
        //     target: { value:'123123' }
        // })
        // userEvent работает с событиями пользователя
        userEvent.type(input, '123123')
        expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
      });
})
