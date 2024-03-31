"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
	const path = usePathname();
	return (
		<nav className={styles.nav}>
			<div className={path === "/" ? styles.navOn : styles.navOff}>
				<Link href="/">Home</Link>
			</div>
			<div className={path === "/" ? styles.navOff : styles.navOn}>
				<Link href="/about">About</Link>
			</div>
		</nav>
	);
}
