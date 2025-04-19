import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Section, Container } from "./components/SteveUI"
import { projects } from "@/data/projects"
import { TbPointFilled } from "react-icons/tb"
import { Badge } from "./components/ui/badge"

interface Projects {
	id: number
	title: string
	description: string | null
	details: string[]
	stack: ProjectsStack[] | null
	link: string | null
}

interface ProjectsStack {
	id: number
	section: string
	technologies: string[] | null
}

export default function Projects() {
	return (
		<Section id={"projects"}>
			<Container>
				<h1 className="font-bold text-2xl md:text-3xl mb-3">Projects</h1>
				<div>
					<p className="">
						Welcome to my projects section! I'll be going in depth on some of my
						past projects from internships, my senior design project and some
						personal projects. This is still under construction as I'm thinking
						of how to design this section.
					</p>
					<div>
						<Accordion type="single" collapsible className="w-full">
							{projects.map((project) => (
								<AccordionItem value={`item-${project.id}`} key={project.id}>
									<AccordionTrigger>{project.title}</AccordionTrigger>
									<AccordionContent>
										<div className="mb-2">
											<h1 className="mb-2 font-bold">Github Link</h1>
											<a
												href="https://github.com/stevenfojas670/Class-Scraper"
												target="__blank"
												className="text-blue-300 hover:border-b-1 hover:border-blue-300"
											>
												{project.link}
											</a>
										</div>
										<div className="mb-2">
											<h1 className="mb-2 font-bold">Description</h1>
											<p>{project.description}</p>
										</div>
										<div className="mb-2">
											<ul className="space-y-2">
												{project.details.map((det, index) => (
													<li key={index}>
														<div className="flex">
															<TbPointFilled />
															{det}
														</div>
													</li>
												))}
											</ul>
										</div>
										<div className="space-y-2">
											{project.stack?.map((stackFields: ProjectsStack) => (
												<div key={stackFields.id} className="">
													<h1 className="mb-2 font-bold">
														{stackFields.section}
													</h1>
													<ul className="flex flex-wrap space-x-2 space-y-2">
														{stackFields.technologies?.map((tech, index) => (
															<li key={index}>
																<Badge>{tech}</Badge>
															</li>
														))}
													</ul>
												</div>
											))}
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</Container>
		</Section>
	)
}
