import { Task } from './types'

const key = 'tasks'

function getTasks() {
	const tasks = JSON.parse(localStorage.getItem(key) ?? '[]') as Task[]
	return tasks.filter((task) => daysSince(task.updated) < 3)
}

function saveTasks(tasks: Task[]) {
	localStorage.setItem(key, JSON.stringify(tasks))
}

function daysSince(time: number) {
	const differenceInTime = new Date().getTime() - time
	return differenceInTime / (1_000 * 60 * 60 * 24)
}

export { getTasks, saveTasks }
