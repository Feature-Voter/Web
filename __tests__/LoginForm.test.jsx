import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import LoginForm from '../components/login'
import 'whatwg-fetch';

describe('LoginForm', () => {
    beforeEach(() => {
        act(() => {
            render(<LoginForm />)
        })
    })

    it('renders a heading', () => {
        const heading = screen.getByRole('heading', {
            name: /Anmelden/i,
        })

        expect(heading).toBeInTheDocument()
    })

    it('should have userName input', () => {
        const input = screen.getByPlaceholderText('user name')

        expect(input).toBeInTheDocument()
    })

    it('should have userPassword input', () => {
        const input = screen.getByPlaceholderText('password')

        expect(input).toBeInTheDocument()
    })

    it('should have submit Button', () => {
        const button = screen.getByDisplayValue('Submit')

        expect(button).toBeInTheDocument()
    })

    // describe('handle Sutmit', () => {

    //     it('should set login to true', () => {
    //         const data = JSON.stringify({message: 'ok'})

    //         jest.spyOn(global, 'fetch').mockResolvedValue({
    //             json: jest.fn().mockResolvedValue(data)
    //         })

    //         const nameInput = screen.getByPlaceholderText('user name')
    //         fireEvent.change(nameInput, {target: {value: "demo"}})

    //         const passwordInput = screen.getByPlaceholderText('password')
    //         fireEvent.change(passwordInput, {target: {value: "demo"}})
            
    //         const button = screen.getByDisplayValue('Submit')
    //         act(()=> {
    //             fireEvent.click(button)
    //         })
    //     })
    // })
})