export default function Contact() {
	return (
		<section
			id="contact"
			className="container justify-self-center py-20 md:py-32 "
		>
			<div className="text-center md:px-6">
				<h1 className="font-bold text-2xl md:text-3xl mb-10">Contact Me</h1>
				<div className="flex flex-col items-center flex-shrink-0 w-24 snap-center justify-self-center">
					<a
						href="https://www.linkedin.com/in/steven-fojas-8a1516241/"
						target="__blank"
					>
						<img
							className="w-8 h-8 drop-shadow-md hover:opacity-50"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
						/>
					</a>
				</div>
			</div>
		</section>
	)
}
