import { FaGithub } from "react-icons/fa"
import { Button } from "./components/ui/button"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

export default function Projects() {
	return (
		<section
			id="projects"
			className="lg:px-4 py-20 lg:py-32 mx-auto space-y-3 flex justify-items-center container"
		>
			<div className="flex-col">
				<h1 className="font-bold text-2xl md:text-3xl mb-3">Projects</h1>
				<div>
					<p className="">
						Welcome to my projects section! I'll be going in depth on some of my
						past projects from internships, my senior desing project and some
						personal projects. This is still under construction as I'm thinking
						of how to desing this section.
					</p>
					<div>
						<Accordion type="single" collapsible className="w-full">
							<AccordionItem value="item-1">
								<AccordionTrigger>Class Scraper</AccordionTrigger>
								<AccordionContent>
									<a
										href="https://github.com/stevenfojas670/Class-Scraper"
										target="__blank"
										className="text-blue-300 hover:border-b-1 hover:border-blue-300"
									>
										https://github.com/stevenfojas670/Class-Scraper
									</a>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>Personal Website</AccordionTrigger>
								<AccordionContent>
									<ul>
										<li>
											That would be this site! I created this using some Shadcn
											components, tailwindcss, and React/Vite.
										</li>
										<li></li>
									</ul>
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger>Is it animated?</AccordionTrigger>
								<AccordionContent>
									Yes. It's animated by default, but you can disable it if you
									prefer.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
					<div className="flex gap-4">
						<p>
							In the mean time here is a link to my github if you wanted to poke
							around.
						</p>
						<span className="">
							<a
								href="https://github.com/stevenfojas670"
								className="text-blue-300 hover:border-b-1 hover:border-blue-300"
							>
								https://github.com/stevenfojas670
							</a>
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}
