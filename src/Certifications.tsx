import { certifications } from "./data"
import { FaLink } from "react-icons/fa"

export default function Certifications() {
	return (
		<div className="justify-items-center text-secondary p-4 w-full bg-black flex-col space-y-4">
			<h1 className="font-bold justify-self-center text-2xl md:text-3xl">
				Certifications
			</h1>
			<div className="flex flex-col gap-4 lg:flex-row lg:gap-4 z-10">
				{certifications.map((cert, index) => (
					<a href={cert.link} key={index} target="_blank">
						<div className="bg-accent-foreground border-secondary/20 border rounded-lg w-[250px] h-[250px] relative hover:bg-primary/80 transition duration-200">
							<div className="absolute top-4 right-4">
								<FaLink />
							</div>
							<div className="flex flex-col items-center justify-center gap-4 h-full">
								<img
									src={cert.icon}
									alt={cert.name}
									className="w-42 h-42 object-contain"
								/>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	)
}
