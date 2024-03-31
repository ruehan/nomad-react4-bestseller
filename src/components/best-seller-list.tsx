import { BooklistType } from "@/interface/types";
import styles from "../styles/best-seller-list.module.css";
import dynamic from "next/dynamic";
import { API_URL } from "@/app/constants";

async function getBestSellerList(id: string) {
	const response = await fetch(`${API_URL}?name=${id}`);

	return response.json();
}

const ClientComponent = dynamic(() => import("./test"));

export default async function BestSellerList({ id }: { id: string }) {
	const bestSellerList = await getBestSellerList(id);

	return (
		<>
			<ClientComponent />
			<div className={styles.title}>{bestSellerList.results.list_name}</div>
			<div className={styles.container}>
				{bestSellerList.results.books.map((list: BooklistType) => (
					<div key={list.primary_isbn10} className={styles.book}>
						<img src={list.book_image}></img>
						<p className={styles.name}>{list.title}</p>
						<p className={styles.author}>{list.author}</p>
						<a
							className={styles.link}
							href={list.amazon_product_url}
							target="_blank"
						>
							Buy now
						</a>
					</div>
				))}
			</div>
		</>
	);
}
