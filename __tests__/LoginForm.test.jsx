import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginForm from '../components/login'

describe('LoginForm', () => {
  it('renders a heading', () => {
    render(<LoginForm />)

    const heading = screen.getByRole('heading', {
      name: /Login Form/i,
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
})