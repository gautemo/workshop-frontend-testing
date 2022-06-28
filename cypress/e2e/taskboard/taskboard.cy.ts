describe('taskboard', () => {
	afterEach(() => {
    cy.clearLocalStorage()
  })
  
  it('New task should be added to todo lane', () => {
		cy.visit('/')
    const task = 'Do'
    cy.dataCy('add-task').type(`${task}{enter}`)
    cy.dataCy('lane-todo').contains(task)
	})

  it('Lane should have correct number of tasks', () => {
		localStorage.setItem('tasks', JSON.stringify([
      {
        id: '1',
        description: '1',
        state: 'todo',
        updated: new Date().getTime(),
      },
      {
        id: '2',
        description: '2',
        state: 'todo',
        updated: new Date().getTime(),
      },
      {
        id: '3',
        description: '3',
        state: 'doing',
        updated: new Date().getTime(),
      },
      {
        id: '4',
        description: '4',
        state: 'done',
        updated: new Date().getTime(),
      },
    ]))
    cy.visit('/')
    cy.dataCy('lane-todo').dataCy('count').contains('2')
    cy.dataCy('lane-doing').dataCy('count').contains('1')
    cy.dataCy('lane-done').dataCy('count').contains('1')
	})
})