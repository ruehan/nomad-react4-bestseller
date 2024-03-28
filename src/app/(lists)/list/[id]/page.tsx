import BestSellerList from "@/components/best-seller-list";
import { Suspense } from "react";

export const API_URL = "https://books-api.nomadcoders.workers.dev/list";

export default async function BestSellerListPage({
	params: { id },
}: {
	params: { id: string };
}) {
	return (
		<>
			<Suspense fallback={<h1>Loading...</h1>}>
				<BestSellerList id={id} />
			</Suspense>
		</>
	);
}
