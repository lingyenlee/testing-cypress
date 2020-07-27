/// <reference types="cypress" />

context('Toggle Todo', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })


    function login(){
      cy.get('[placeholder="Email"]').type("mike@gmail.com")
      cy.get('[placeholder="Password"]').type("password")
      cy.get('[type="checkbox"]').click()
      cy.contains("Login").click()
    }

    function logout(){
      cy.contains("logout").click()
    }

    
    it('can login, toggle a todo and logout', () => {
      login()

      cy.get(':nth-child(2) > input').click()
      cy.contains("Go to store (DONE)")
      cy.get(':nth-child(2) > input').click()


      logout()
    })
  
})
  