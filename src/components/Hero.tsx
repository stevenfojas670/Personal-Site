export default function Hero() {
	return (
		<div className="">
			<div className="px-6 py-6 mx-auto">
				<h2 className="font-bold text-xl md:text-3xl">
					I'm Steven Fojas, an aspiring Software Engineer and Cybersecurity
					Professional
				</h2>
				<div className="md:flex space-x-3 px-3 py-3">
					<button className="text-sm cursor-pointer rounded-full border-1 border-orange-400  px-2 py-2">
						<a>Contact Me</a>
					</button>
					<button className="text-sm cursor-pointer rounded-full border-1 border-orange-400  px-2 py-2">
						<a>Resume</a>
					</button>
				</div>
			</div>
		</div>
	)
}
