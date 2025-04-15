import { Button } from "@/components/ui/button"
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { FaLinkedin } from "react-icons/fa"

export default function Contact() {
	return (
		<section id="contact" className="flex justify-center py-20 lg:py-20">
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
		</section>
	)
}
