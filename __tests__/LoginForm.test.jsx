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
})