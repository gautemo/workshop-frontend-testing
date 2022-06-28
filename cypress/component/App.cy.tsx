import App from '../../src/App'
import { mount } from 'cypress/react'

describe('App.cy.ts', () => {
	it('playground', () => {
		mount(<App />)
	})
})
