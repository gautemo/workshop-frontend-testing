import { Task } from '../types'

const activeMinutes = 1

function filterActiveTasks(tasks: Task[]) {
	return tasks.filter((task) => minutesSince(task.updated) < activeMinutes)
}

function minutesSince(time: number) {
	const differenceInTime = new Date().getTime() - time
	return differenceInTime / (1_000 * 60)
}

function filterMissedTasks(tasks: Task[]) {
	return tasks.filter((task) => minutesSince(task.updated) >= activeMinutes && task.state !== 'done')
}

export { filterActiveTasks, filterMissedTasks }
