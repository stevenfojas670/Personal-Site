import Timeline from "@/components/Timeline"

export default function Experience() {
	return (
		<section
			id="experience"
			className="px-4 md:py-32 mx-auto justify-center container"
		>
			<div className="flex flex-col justify-center items-center text-secondary pb-8 space-y-6">
				<h1 className="font-bold justify-self-center text-2xl md:text-3xl">
					Experience Timeline
				</h1>
				<Timeline />
			</div>
		</section>
	)
}
