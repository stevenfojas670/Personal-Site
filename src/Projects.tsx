import { FaGithub } from "react-icons/fa"
import { Button } from "./components/ui/button"

export default function Projects() {
	return (
		<section
			id="projects"
			className="lg:px-4 py-20 lg:py-32 mx-auto space-y-3 flex justify-items-center container"
		>
			<div className="flex-col">
				<h1 className="font-bold text-2xl md:text-3xl mb-3">Projects</h1>
				<div>
					<p className="text-md mb-4">
						Welcome to my projects section! I'll be going in depth on some of my
						past projects from internships, my senior desing project and some
						personal projects. This is still under construction as I'm thinking
						of how to desing this section.
					</p>
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
