import { ErrorBox } from '../../../../src/taskboard/errorbox/ErrorBox'

describe('ErrorBox.cy.ts', () => {
	it('component should show message on expand', () => {
		const message = 'msg'
    cy.mount(<ErrorBox message={message}/>)
    cy.get('summary').click()
    cy.dataCy('error-message').should('be.visible')
	})
})
