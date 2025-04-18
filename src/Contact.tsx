import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaLinkedin } from "react-icons/fa"
import { Section } from "./components/SteveUI"

export default function Contact() {
	return (
		<Section id={"contact"}>
			<Card className="bg-primary border-secondary/20 text-secondary w-[200px]">
				<CardHeader>
					<CardTitle className="text-lg">Connect with me</CardTitle>
				</CardHeader>
				<CardFooter className="flex justify-between">
					<a
						href="https://www.linkedin.com/in/steven-fojas-8a1516241/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-3xl text-secondary hover:text-secondary/80 transition"
					>
						<FaLinkedin />
					</a>
				</CardFooter>
			</Card>
		</Section>
	)
}
