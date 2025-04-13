export default function Hero() {
	return (
		<section className="container justify-self-center py-20 md:py-32 px-4 md:px-6 bg-neutral-950">
			<div className="text-center md:text-start space-y-6 md:px-6">
				{/* main content */}
				<main className="font-bold text-xl md:text-4xl">
					<h1>
						<span>
							I'm Steven Fojas, an aspiring Software Engineer or Cybersecurity
							Professional
						</span>
					</h1>
				</main>
				{/* subtitle */}
				<p className="text-neutral-500">Stay persistent</p>
				{/* links */}
				<div className="flex flex-wrap gap-2 justify-center md:justify-start font-bold text-neutral-950">
					<button className="w-full md:w-fit">
						<a
							href="#contact"
							className=" bg-neutral-100 py-2 px-4 flex items-center justify-center rounded-md transition-all duration-100 hover:opacity-50"
						>
							Contact Me
						</a>
					</button>
					<button className="w-full md:w-fit">
						<a
							href="#contact"
							className=" bg-neutral-100 py-2 px-4 flex items-center justify-center rounded-md transition-all duration-100 hover:opacity-50"
						>
							Resume
						</a>
					</button>
					<button className="w-full md:w-fit">
						<a
							href="https://www.credly.com/users/steven-fojas"
							className=" bg-neutral-100 py-2 px-4 flex items-center justify-center rounded-md transition-all duration-100 hover:opacity-50"
							target="_blank"
						>
							Certifications
						</a>
					</button>
				</div>
			</div>
		</section>
	)
}
