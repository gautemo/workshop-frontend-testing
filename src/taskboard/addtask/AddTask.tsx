import { KeyboardEvent } from 'react'
import styles from './AddTask.module.css'
import { useStore } from '../TaskBoardProvider'

export function AddTask() {
	const store = useStore()
	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			store.addTask(event.currentTarget.value)
			event.currentTarget.value = ''
		}
	}

	return (
		<label className={styles.label}>
			<span>Do something cool?</span>
			<input type="text" onKeyDown={handleKeyDown} data-cy="add-task" />
		</label>
	)
}
