import styles from "../styles/error.module.css";

export default function NotFound() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.title}>404</div>
				<div className={styles.error}>Error: 404 page not found</div>
				<div className={styles.text}>
					Sorry, the page youre looking for cannot be accessed
				</div>
			</div>
		</>
	);
}
