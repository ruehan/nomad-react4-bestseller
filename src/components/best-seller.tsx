import { API_URL } from "@/app/(home)/page";
import { BestSellerType } from "@/interface/types";
import Link from "next/link";
import styles from "../styles/best-seller.module.css";

async function getBestSeller() {
	const response = await fetch(API_URL);
	return response.json();
}

export default async function BestSeller() {
	const bestSeller = await getBestSeller();
	// console.log(bestSeller.results);
	return (
		<>
			<div className={styles.container}>
				{bestSeller.results.map((best: BestSellerType) => (
					<Link
						key={best.list_name}
						className={styles.list}
						href={`/list/${best.list_name_encoded}`}
					>
						{best.list_name}
					</Link>
				))}
			</div>
		</>
	);
}
