export type State = 'todo' | 'doing' | 'done'

export type Task = {
	id: string
	description: string
	state: State
	updated: number
}
