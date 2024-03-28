import { API_URL } from "@/app/(home)/page";
import { BestSellerType } from "@/interface/types";
import Link from "next/link";

async function getBestSeller() {
	const response = await fetch(API_URL);
	return response.json();
}

export default async function BestSeller() {
	const bestSeller = await getBestSeller();
	console.log(bestSeller.results);
	return (
		<div>
			{bestSeller.results.map((best: BestSellerType) => (
				<li>
					<Link href={`/list/${best.list_name_encoded}`}>{best.list_name}</Link>
				</li>
			))}
		</div>
	);
}
