import { Section, Container } from "./components/SteveUI"
import { certifications } from "./data/misc"
import { FaLink } from "react-icons/fa"

export default function Certifications() {
	return (
		<Section id={"certifications"}>
			<Container>
				<div className="w-full">
					<h1 className="font-bold text-2xl md:text-3xl mb-3">
						Certifications
					</h1>
					<p>
						Here are some certifications I've earned so far. I've got a couple
						other certifications on my list for this year. I'm planning to get
						the AWS Solutions Architect in Summer 2025 and CompTIA CySA+ some
						time at the end of this year.
					</p>
				</div>

				<div className="flex flex-col gap-4 lg:flex-row lg:gap-4 z-10 justify-center">
					{certifications.map((cert, index) => (
						<a key={index} href={cert.link} target="__blank">
							<div className="bg-card border-card-20 rounded-lg w-[250px] h-[250px] relative hover:bg-popover transition duration-200">
								<div className="absolute top-4 right-4">
									<FaLink />
								</div>
								<div className="flex flex-col items-center justify-center gap-4 h-full">
									<img
										src={cert.icon}
										alt={cert.name}
										className="w-32 object-contain"
									/>
								</div>
							</div>
						</a>
					))}
				</div>
			</Container>
		</Section>
	)
}
