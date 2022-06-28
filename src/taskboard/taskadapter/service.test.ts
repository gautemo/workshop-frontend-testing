import { describe, it, vi, assert } from 'vitest'
import { Task } from '../types'
import { getActiveTasks } from './service'

describe.concurrent('task adapter service', () => {
	it('getActiveTasks() should only get tasks fresher than 1 minute', async () => {
		vi.mock('./repository', () => {
			const savedTasks: Task[] = [
				{
					id: '1',
					description: 'new',
					state: 'todo',
					updated: new Date().getTime(),
				},
				{
					id: '2',
					description: '2 minuts old',
					state: 'todo',
					updated: new Date().getTime() - 1000 * 120,
				},
			]
			return {
				getTasks: vi.fn().mockReturnValue(savedTasks),
			}
		})
		const tasks = getActiveTasks()
		assert.equal(tasks.length, 1)
		assert.equal(tasks[0].id, '1')
	})
})
