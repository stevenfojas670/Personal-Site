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
						Welcome to my page! I'm a Senior Computer Science major at the
						University of Nevada, Las Vegas and I currently work with Southwest
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
						As of 2025, I'm set to graduate in August and plan to further
						enhance my expertise by pursuing the AWS Solutions Architect and
						CompTIA CySA+ certifications. Additionally, I'm expanding my
						knowledge in network infrastructure device configuration,
						maintenance, and security while refining my Application Development
						skills, particularly with React, Python, and Django.
					</p>
					<br></br>
					<p>
						I'm actively seeking opportunities in Cybersecurity, Software
						Engineering, Cloud Engineering, Network Engineering, or really any
						sort of IT operations. I'm always open to any new opportunities and
						ready to put in whatever work that needs to be done to get there.
					</p>
				</div>
			</Container>
		</Section>
	)
}
