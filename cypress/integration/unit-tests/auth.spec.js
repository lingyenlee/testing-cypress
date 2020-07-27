/// <reference types="cypress" />

context('Auth', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    
    it('can toggle sign-up & login button text', () => {
        cy.contains("Signup")
        cy.get('[type="checkbox"]').click()
        cy.contains("Login")
        cy.contains("Signup").should("not.be.visible")
    })
  
})
  