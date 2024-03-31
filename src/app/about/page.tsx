import styles from "../../styles/about.module.css";

export const metadata = {
	title: "About Us",
};

export default function AboutPage() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>ABOUT US</h1>
			<div className={styles.textBox}>
				<p>
					Welcome to the official explorer for The NewYork Times Best Seller
					list explorer.
				</p>
				<p>We hope you enjoy your stay!</p>
			</div>
		</div>
	);
}
