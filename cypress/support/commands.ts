/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

Cypress.Commands.add('dataCy', (value) => {
	return cy.get(`[data-cy=${value}]`)
})

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to select DOM element by data-cy attribute.
			 * @example cy.dataCy('greeting')
			 */
			dataCy(value: string): Chainable<any>
		}
	}
}

export {}
