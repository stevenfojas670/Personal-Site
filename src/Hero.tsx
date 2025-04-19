import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/SteveUI"

export default function Hero() {
	return (
		<Section id={"home"}>
			<Container>
				<main className="font-bold text-xl md:text-4xl">
					<div className="text-center lg:text-start">
						<h1>
							<span>
								I'm Steven Fojas, an aspiring Software Engineer or Cybersecurity
								Professional
							</span>
						</h1>
					</div>
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
			</Container>
		</Section>
	)
}
