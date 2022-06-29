import { AddTask } from '../../../../src/taskboard/addtask/AddTask'
import { TaskBoardProvider } from '../../../../src/taskboard/TaskBoardProvider'

describe('AddTask.cy.ts', () => {
	it('component should clear input element on enter', () => {
		cy.mount(<TaskBoardProvider><AddTask/></TaskBoardProvider>)
    cy.dataCy('add-task').type(`a{enter}`).should('be.empty')
	})
})
