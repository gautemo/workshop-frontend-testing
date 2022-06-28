import styles from './ErrorBox.module.css'

type Props = {
	message: string
}

export function ErrorBox(props: Props) {
	return (
		<details className={styles.error}>
			<summary>Noe gikk galt</summary>
			<p>{props.message}</p>
		</details>
	)
}
