import { Button } from "@/components/ui/button"

export default function Hero() {
	return (
		<section className="w-full py-20 lg:py-32 flex justify-center border-b-1 border-primary">
			<div className="container px-4 text-center md:text-start space-y-6">
				<main className="font-bold text-xl md:text-4xl">
					<h1>
						<span>
							I'm Steven Fojas, an aspiring Software Engineer or Cybersecurity
							Professional
						</span>
					</h1>
				</main>
				<div className="flex flex-wrap gap-2 justify-center md:justify-start font-bold">
					<Button className="bg-accent hover:bg-accent/90">
						<a href="#contact">Contact Me</a>
					</Button>
					<Button className="bg-accent hover:bg-accent/90">
						<a href="#certifications">Certifications</a>
					</Button>
					<Button className="bg-accent hover:bg-accent/90">
						<a href="/pdfs/Resume.pdf" target="__blank">
							Resume
						</a>
					</Button>
				</div>
			</div>
		</section>
	)
}
