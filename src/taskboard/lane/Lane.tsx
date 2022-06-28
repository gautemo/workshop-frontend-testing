import { useStore } from '../TaskBoardProvider'
import { State } from '../types'
import styles from './Lane.module.css'
import { useState } from 'react'

type Props = {
	lane: State
}

export function Lane(props: Props) {
	const store = useStore()
	const tasksInLane = store.tasks.filter((task) => task.state === props.lane)
	const [dropZoneActive, setDropzoneActive] = useState(false)

	function onDrag(event: React.DragEvent<HTMLLIElement>, id: string) {
		event.dataTransfer.setData('id', id)
		event.dataTransfer.dropEffect = 'move'
	}

	function onDrop(event: React.DragEvent<HTMLDivElement>) {
		const id = event.dataTransfer.getData('id')
		store.moveTask(id, props.lane)
		setDropzoneActive(false)
	}

	function onDragOver(event: React.DragEvent<HTMLDivElement>) {
		setDropzoneActive(true)
		event.preventDefault()
	}

	function onDragLeave() {
		setDropzoneActive(false)
	}

	return (
		<div
			className={`${styles.lane} ${dropZoneActive ? styles.active : ''}`}
			onDrop={onDrop}
			onDragOver={onDragOver}
			onDragLeave={onDragLeave}
		>
			<h2>
				{props.lane} - <span>{tasksInLane.length}</span>
			</h2>
			<ul>
				{tasksInLane.map((task) => (
					<li key={task.id} draggable onDragStart={(event) => onDrag(event, task.id)}>
						{task.description}
					</li>
				))}
			</ul>
		</div>
	)
}
