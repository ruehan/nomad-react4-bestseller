import Navigation from "@/components/navigation";
import "../styles/global.css";
import { Amatic_SC } from "next/font/google";

export const metadata = {
	title: "THE NEW YORK TIMES BEST SELLER EXPLORER",
};

const amatic = Amatic_SC({ subsets: ["latin"], weight: ["700"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={amatic.className}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
