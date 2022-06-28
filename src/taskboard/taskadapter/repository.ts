import { Task } from '../types'

const key = 'tasks'

export function getTasks() {
	return JSON.parse(localStorage.getItem(key) ?? '[]') as Task[]
}

export function saveAllTasks(tasks: Task[]) {
	localStorage.setItem(key, JSON.stringify(tasks))
}
