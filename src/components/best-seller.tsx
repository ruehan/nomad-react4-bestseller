import { BestSellerType } from "@/interface/types";
import Link from "next/link";
import styles from "../styles/best-seller.module.css";
import { Card, CardBody } from "@nextui-org/react";
import { API_URL_DETAIL } from "@/app/constants";

async function getBestSeller() {
	const response = await fetch(API_URL_DETAIL);
	return response.json();
}

export default async function BestSeller() {
	const bestSeller = await getBestSeller();
	return (
		<>
			<div className={styles.container}>
				<div className={styles.title}>
					THE NEW YORK TIMES BEST SELLER EXPLORER
				</div>
				{bestSeller.results.map((best: BestSellerType) => (
					<Card key={best.list_name_encoded} className={styles.list}>
						<CardBody>
							<Link
								key={best.list_name}
								href={`/list/${best.list_name_encoded}`}
							>
								{best.list_name}
							</Link>
						</CardBody>
					</Card>
				))}
			</div>
		</>
	);
}
