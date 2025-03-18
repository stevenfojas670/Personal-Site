import { Accordion } from "./components/Accordion"
import { experiences } from "../data"

export default function Experience() {
	return (
		<section
			id="experience"
			className="px-4 md:px-6 py-20 md:py-32 mx-auto justify-center container bg-neutral-950"
		>
			<div className="md:px-6 py-6">
				<h1 className="font-bold justify-self-center text-2xl md:text-3xl mb-10">
					Experience
				</h1>
				{experiences.map((items, index) => (
					<div key={index} className="">
						<Accordion items={items} />
					</div>
				))}
			</div>
		</section>
	)
}
