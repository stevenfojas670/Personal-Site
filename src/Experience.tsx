import Timeline from "@/components/Timeline"
import { Section, Container } from "./components/SteveUI"

export default function Experience() {
	return (
		<Section id={"experience"}>
			<Container>
				<h1 className="font-bold justify-self-center text-2xl md:text-3xl">
					Experience Timeline
				</h1>
				<Timeline />
			</Container>
		</Section>
	)
}
