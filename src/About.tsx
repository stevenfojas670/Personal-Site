import { Section, Container } from "./components/SteveUI"

export default function About() {
	return (
		<Section id={"about"}>
			<Container>
				<h1 className="font-bold justify-self-center text-2xl md:text-3xl">
					About Me
				</h1>
				<div>
					<p>
						Welcome to my page! I'm a recent Computer Science graduate from the
						University of Nevada, Las Vegas. I currently work with the Southwest
						Gas Corporation as a Network Analyst Intern.
					</p>
					<br></br>
					<p>
						Throughout college, I've gained a bit of experience in everything
						such as Software Engineering, Cybersecurity, and Network Operations.
					</p>
					<br></br>
					<p>
						I have experience in Full-Stack Development through internships and
						self-study, utilizing frontend and backend technologies, including
						JavaScript, jQuery, React, Next.js, and .NET, and Django.
					</p>
					<br></br>
					<p>
						I'm currently studying for the AWS Solutions Architect exam, working
						on a 2D physics engine in JavaScript, and coaching middle school
						basketball.
					</p>
					<br></br>
					<p>
						I'm actively seeking opportunities in Cybersecurity, Software
						Engineering, Cloud Engineering, Network Engineering, and Data
						Science. I'm always open to any new opportunities and ready to put
						in whatever work that needs to be done to get there.
					</p>
				</div>
			</Container>
		</Section>
	)
}
