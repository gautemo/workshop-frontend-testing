import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ErrorBox } from './errorbox/ErrorBox'
import { getActiveTasks, getNumberOfTasksMissed, saveTasks } from './taskadapter/service'
import { State, Task } from './types'

type Store = {
	tasks: Task[]
	missedTasks: number
	moveTask: (id: string, toState: State) => void
	addTask: (description: string) => void
}

export const StoreContext = createContext<Store | undefined>(undefined)

export function TaskBoardProvider(props: { children: ReactNode }) {
	const [tasks, setTasks] = useState<Task[]>([])
	const [missedTasks, setMissedTasks] = useState(0)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		try {
			setTasks(getActiveTasks())
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message)
			} else {
				setError('Could not get tasks')
			}
		}
		setMissedTasks(getNumberOfTasksMissed())
	}, [])

	function moveTask(id: string, toState: State) {
		const updatedTasks = tasks.map((task) =>
			task.id === id ? { ...task, state: toState, updated: new Date().getTime() } : task
		)
		setTasks(updatedTasks)
		saveTasks(updatedTasks)
	}

	function addTask(description: string) {
		const task: Task = {
			id: Math.random().toString(36).substring(2, 6),
			description,
			state: 'todo',
			updated: new Date().getTime(),
		}
		const updatedTasks = [...tasks, task]
		setTasks(updatedTasks)
		saveTasks(updatedTasks)
	}

	return (
		<StoreContext.Provider value={{ tasks, missedTasks, moveTask, addTask }}>
			{error && <ErrorBox message={error} />}
			{!error && props.children}
		</StoreContext.Provider>
	)
}

export const useStore = () => {
	const context = useContext(StoreContext)
	if (!context) throw new Error('useStore must be used within a TaskBoardProvider')
	return context
}
