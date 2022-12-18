import LoginForm from "../../components/login"

describe('index.cy.ts', () => {
  it('should have headline', () => {
    cy.mount(<LoginForm />)
  })
})