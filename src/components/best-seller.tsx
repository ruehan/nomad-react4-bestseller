import { API_URL } from "@/app/(home)/page";
import { BestSellerType } from "@/interface/types";

async function getBestSeller() {
	const response = await fetch(API_URL);
	return response.json();
}

export default async function BestSeller() {
	const bestSeller = await getBestSeller();
	console.log(bestSeller.results);
	return (
		<>
			{bestSeller.results.map((best: BestSellerType) => (
				<p>{best.list_name}</p>
			))}
		</>
	);
}
