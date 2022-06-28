import App from '../../src/App'

describe('App.cy.ts', () => {
	it('playground', () => {
		cy.mount(<App />)
	})
})
