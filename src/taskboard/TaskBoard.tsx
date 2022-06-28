import { Lane } from './lane/Lane'
import { TaskBoardProvider } from './TaskBoardProvider'
import styles from './TaskBoard.module.css'
import { AddTask } from './addtask/AddTask'

export function TaskBoard() {
	return (
		<TaskBoardProvider>
			<AddTask />
			<div className={styles.grid}>
				<Lane lane="todo" />
				<Lane lane="doing" />
				<Lane lane="done" />
			</div>
		</TaskBoardProvider>
	)
}
