import { Task } from '../types'
import { filterActiveTasks, filterMissedTasks } from './utils'

const key = 'tasks'

function getTasks() {
	return JSON.parse(localStorage.getItem(key) ?? '[]') as Task[]
}

function getActiveTasks() {
	return filterActiveTasks(getTasks())
}

function getNumberOfTasksMissed() {
	return filterMissedTasks(getTasks()).length
}

function saveTasks(tasks: Task[]) {
	const tasksNotInList = getTasks().filter((task) => !tasks.some((t) => t.id === task.id))
	localStorage.setItem(key, JSON.stringify([...tasksNotInList, ...tasks]))
}

export { getActiveTasks, saveTasks, getNumberOfTasksMissed }
