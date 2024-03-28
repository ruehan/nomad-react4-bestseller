import BestSeller from "@/components/best-seller";
import { Suspense } from "react";

export const metadata = {
	title: "Home",
};

export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

export default async function HomePage() {
	return (
		<Suspense fallback={<h1>Error</h1>}>
			<BestSeller />
		</Suspense>
	);
}
