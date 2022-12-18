import LoginForm from "../../components/login"

describe('index.cy.ts', () => {
  beforeEach(() => {
    cy.mount(<LoginForm />)
  })
  it('should have headline', () => {
    cy.get("h1")
  })
})