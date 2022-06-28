import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { getTasks, saveTasks } from './taskService'
import { State, Task } from './types'

type Store = {
	tasks: Task[]
	moveTask: (id: string, toState: State) => void
	addTask: (description: string) => void
}

export const StoreContext = createContext<Store | undefined>(undefined)

export function TaskBoardProvider(props: { children: ReactNode }) {
	const [tasks, setTasks] = useState<Task[]>([])
	useEffect(() => {
		setTasks(getTasks())
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

	return <StoreContext.Provider value={{ tasks, moveTask, addTask }}>{props.children}</StoreContext.Provider>
}

export const useStore = () => {
	const context = useContext(StoreContext)
	if (!context) throw new Error('useStore must be used within a TaskBoardProvider')
	return context
}
