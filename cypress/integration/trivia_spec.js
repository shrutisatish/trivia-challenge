describe('Trivia Header', () => {
    before(() => {
        cy.visit('/')
    })
    it('Test to check if header is present', () => {
      cy.get('.header').should('be.visible')
      cy.get('.header').should('contain','Welcome to the Trivia !!')

    })
})

describe('Trivia Footer', () => {
    before(() => {
        cy.visit('/')
    })
    it('Test to check if footer is present', () => {
      cy.get('.footer').should('be.visible')
      cy.get('.footer').should('contain','2019: Shruti Satish')
      cy.get('.btn-li > [data-test=fa]').should('be.visible')
      cy.get('.btn-git > [data-test=fa]').should('be.visible')
    })
})

describe('Trivia FlashCard', () => {
    before(() => {
        cy.visit('/')
    })
    it('Test to check if flashcard is present', () => {
      cy.get('[data-test=mask]').should('be.visible')
      cy.get('[data-test=card-body]').should('be.visible')
      cy.get('[data-test=card-body] > [data-test=button]').should('be.visible')
      cy.get('[data-test=card-title]').should('be.visible')

    })
    it('Test to verify button click shows the answer and the next button', () => {
      cy.get('[data-test=card-body] > [data-test=button]').click()
      cy.get('[data-test=card-text]').should('be.visible')
      cy.get(':nth-child(1) > [data-test=fa]').should('be.visible')
      cy.get('[data-test=card-body] > [data-test=button]').should('not.be.visible')

    })
    it('Test to verify click on next button shows next quetion and hides the answer', () => {
      cy.get(':nth-child(1) > [data-test=fa]').click()
      cy.get('[data-test=card-body] > [data-test=button]').should('be.visible')
      cy.get('[data-test=card-text]').should('not.be.visible')
    })
    it('Test to verify that after 10 click restart button is shown', () => {
      cy.get('[data-test=card-body] > [data-test=button]').click()
      cy.get(':nth-child(1) > [data-test=fa]').click()

      cy.get('[data-test=card-body] > [data-test=button]').click()
      cy.get(':nth-child(1) > [data-test=fa]').click()

      cy.get('[data-test=card-body] > [data-test=button]').click()
      cy.get(':nth-child(1) > [data-test=fa]').click()

      cy.get('[data-test=card-body] > [data-test=button]').click()
      cy.get(':nth-child(1) > [data-test=fa]').click()

      cy.get('[data-test=card-body] > [data-test=button]').click()
      cy.get(':nth-child(1) > [data-test=fa]').click()

      cy.get('[data-test=card-body] > [data-test=button]').click()
      cy.get(':nth-child(1) > [data-test=fa]').click()

      cy.get('[data-test=card-body] > [data-test=button]').click()
      cy.get(':nth-child(1) > [data-test=fa]').click()

      cy.get('[data-test=card-body] > [data-test=button]').click()
      cy.get(':nth-child(1) > [data-test=fa]').click()

      cy.get('[data-test=card-body] > [data-test=button]').click()
      cy.get(':nth-child(1) > [data-test=fa]').click()

      cy.get(':nth-child(2) > [data-test=button]').should('be.visible')
      cy.get(':nth-child(2) > [data-test=button]').click()

      cy.get('[data-test=mask]').should('be.visible')
      cy.get('[data-test=card-body]').should('be.visible')
      cy.get('[data-test=card-body] > [data-test=button]').should('be.visible')
    })

})
