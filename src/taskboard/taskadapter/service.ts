import { Task } from '../types'
import { getTasks, saveAllTasks } from './repository'
import { filterActiveTasks, filterMissedTasks } from './utils'

function getActiveTasks() {
	return filterActiveTasks(getTasks())
}

function getNumberOfTasksMissed() {
	return filterMissedTasks(getTasks()).length
}

function saveTasks(tasks: Task[]) {
	const tasksNotInList = getTasks().filter((task) => !tasks.some((t) => t.id === task.id))
	saveAllTasks([...tasksNotInList, ...tasks])
}

export { getActiveTasks, saveTasks, getNumberOfTasksMissed }
