import { useStore } from '../TaskBoardProvider'

export function MissedTasks() {
	const store = useStore()
	return <p>Missed tasks: {store.missedTasks}</p>
}
