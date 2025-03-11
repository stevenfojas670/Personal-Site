export default function Hero() {
	return (
		<div className="bg-neutral-700 text-white">
			<div className="px-6 py-6 mx-auto text-center">
				<h2 className="font-bold text-xl md:text-3xl">
					I'm Steven Fojas, an aspiring Software Engineer and Cybersecurity
					Expert
				</h2>
				<h6 className="text-lg">Always trusting the process</h6>
				<div className="md:flex space-x-3 px-3 py-3 justify-self-center">
					<button className="text-sm cursor-pointer rounded-full border-1 border-white  px-2 py-2">
						<a>Contact Me</a>
					</button>
					<button className="text-sm cursor-pointer rounded-full border-1 border-white  px-2 py-2">
						<a>Resume</a>
					</button>
				</div>
			</div>
		</div>
	)
}
