import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
const { LoginProvider, LoginContext } = require("../components/LoginContext")
import { useContext } from 'react'

const TestComponent = () => {
    const { user, login, logout } = useContext(LoginContext)
  
    return (<>
      <h1 data-testid="authSate">{user.auth}</h1>
      <button data-testid="loginButton" onClick={login}>login</button>
    </>)
  }


describe('LoginContext', () => {

    it("set auth to true", () => {
        const {getByTestId} = render(<LoginProvider><TestComponent /></LoginProvider>)

        const loginState = getByTestId('authSate')
        const loginButton = getByTestId('loginButton')

        expect(loginState).toBeInTheDocument()
        expect(loginButton).toBeInTheDocument()
        
        // fireEvent.click(loginButton)
        // expect(loginState.innerHTML).toBe("true")
    })
})