describe('taskboard', () => {
	it('New task should be added to todo lane', () => {
		cy.visit('/')
    const task = 'Do'
    cy.dataCy('add-task').type(`${task}{enter}`)
    cy.dataCy('lane-todo').contains(task)
	})
})