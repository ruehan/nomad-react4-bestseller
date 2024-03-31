import BestSeller from "@/components/best-seller";
import { Suspense } from "react";

export const metadata = {
	title: "Home",
};

export default async function HomePage() {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<BestSeller />
		</Suspense>
	);
}
