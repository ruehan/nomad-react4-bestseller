import BestSellerList from "@/components/best-seller-list";
import { Spinner } from "@nextui-org/react";
import { Suspense } from "react";

export default async function BestSellerListPage({
	params: { id },
}: {
	params: { id: string };
}) {
	return (
		<>
			<Suspense
				fallback={
					<div
						style={{
							marginTop: "150px",
						}}
					>
						Loading..
					</div>
				}
			>
				<BestSellerList id={id} />
			</Suspense>
		</>
	);
}
