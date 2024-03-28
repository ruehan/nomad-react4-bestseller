import { API_URL } from "@/app/(lists)/list/[id]/page";
import { BooklistType } from "@/interface/types";

async function getBestSellerList(id: string) {
	const response = await fetch(`${API_URL}?name=${id}`);
	return response.json();
}

export default async function BestSellerList({ id }: { id: string }) {
	const bestSellerList = await getBestSellerList(id);
	// console.log(bestSellerList.results.books[0].buy_links);
	return (
		<>
			{bestSellerList.results.books.map((list: BooklistType) => (
				<p>{list.title}</p>
			))}
		</>
	);
}
