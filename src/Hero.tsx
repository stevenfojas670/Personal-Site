import { Button } from "@/components/ui/button"

export default function Hero() {
	return (
		<section className="container justify-self-center py-20 md:py-32 px-4">
			<div className="text-center md:text-start space-y-6">
				{/* main content */}
				<main className="font-bold text-xl md:text-4xl">
					<h1>
						<span>
							I'm Steven Fojas, an aspiring Software Engineer or Cybersecurity
							Professional
						</span>
					</h1>
				</main>
				{/* subtitle */}
				<p>Stay persistent</p>
				{/* links */}
				<div className="flex flex-wrap gap-2 justify-center md:justify-start font-bold">
					<Button className="bg-accent hover:bg-accent/90">Contact Me</Button>
					<Button className="bg-accent hover:bg-accent/90">
						Certifications
					</Button>
					<Button className="bg-accent hover:bg-accent/90">Resume</Button>
				</div>
			</div>
		</section>
	)
}
