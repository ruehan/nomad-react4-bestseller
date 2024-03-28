"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
	const path = usePathname();
	return (
		<nav className={styles.nav}>
			<div className={styles.title}>
				<Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
			</div>
			<div className={styles.title}>
				<Link href="/about">About</Link>
				{path === "/about" ? "🔥" : ""}
			</div>
		</nav>
	);
}
