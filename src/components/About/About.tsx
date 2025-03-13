import { Skills } from "./components/Skills"

export default function About() {
	const skills = {
		certifications: [
			{
				name: "CompTIA Network+",
				icon: "/icons/networkplus-logo.svg",
			},
			{
				name: "CompTIA Security+",
				icon: "/icons/securityplus-logo.svg",
			},
			{
				name: "AWS CCP",
				icon: "/icons/awsccp-logo.png",
			},
		],
		languages: [
			{
				name: "C++",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
			},
			{
				name: "C",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
			},
			{
				name: "C#",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
			},
			{
				name: "JavaScript",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
			},
			{
				name: "Node.js",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
			},
			{
				name: "HTML5",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
			},
			{
				name: "CSS3",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
			},
			{
				name: "Python",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
			},
			{
				name: "Java",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
			},
			{
				name: "PostgreSQL",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
			},
		],
		frameworks: [
			{
				name: "React.js",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
			},
			{
				name: "Next.js",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
			},
			{
				name: "Django",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
			},
			{
				name: ".NET",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain-wordmark.svg",
			},
		],
		libraries: [
			{
				name: "Tailwind CSS",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
			},
			{
				name: "Bootstrap 5",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
			},
			{
				name: "Material UI",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
			},
		],
		tools: [
			{
				name: "Git",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
			},
			{
				name: "Docker",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
			},
			{
				name: "AWS",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
			},
			{
				name: "Tenable",
				icon: "/icons/tenable-icon.svg",
			},
			{
				name: "AppViewX",
				icon: "/icons/appviewx-logo.svg",
			},
			{
				name: "F5 BIG-IP",
				icon: "/icons/f5-logo.svg",
			},
		],
	}

	return (
		<div className="bg-neutral-700 text-white">
			<div className="px-6 py-6 mx-auto justify-center text-gray-200">
				<h1 className="font-bold justify-self-center text-2xl md:text-3xl mb-3">
					About Me
				</h1>
				<p className="text-md">
					I am Steven Fojas, a Senior Computer Science student a the University
					of Nevada, Las Vegas. I currently work with Southwest Gas Corporation
					as a Network Services Intern. I provide technical expertise in
					configuring, maintaining, and securing F5 BIG-IP systems and play a
					key role in system hardening by scanning assets for compliance,
					identifying vulnerabilities, and applying hardening patches in
					alignment with CIS Benchmarks. Additionally, I assist in securing F5
					BIG-IP systems, Cisco routers, and switches while automating asset
					tracking using Python scripts to identify unmanaged assets not
					detected by Tenable. I also handle certificate management using
					AppViewX, ensuring secure application communication and encryption and
					identity managment using Cisco ISE ensuring proper AAA access to our
					networking devices.
				</p>
				<p className="text-md">
					Throughout my college career, I have earned CompTIA Network+,
					Security+, and AWS Certified Cloud Practitioner certifications,
					strengthening my expertise in IT infrastructure and security.
				</p>
				<p className="text-md">
					Beyond infrastructure, I have gained experience in Full-Stack
					Development through internships and self-study, utilizing hybrid agile
					methodologies for project management. I have worked with frontend and
					backend technologies, including JavaScript, React.js, Next.js, C#, and
					.NET, among others.
				</p>
				<p className="text-md">
					As of 2025, I am set to graduate in August and plan to further enhance
					my expertise by pursuing the AWS Solutions Architect and CompTIA
					CySA+, and Linux+ certifications. Additionally, I am expanding my
					knowledge in network infrastructure configuration, maintenance, and
					security while refining my Full-Stack Development skills, particularly
					in React, Python, and Django.
				</p>
				<p className="text-md">
					I am actively seeking opportunities in Cybersecurity, Software
					Engineering, Cloud Engineering, Network Engineering, or IT Operations
					to apply and expand my technical skills in dynamic, growth-oriented
					environments.
				</p>
				{/**Skills section, will have badges of languages */}
				{Object.entries(skills).map((category, index) => (
					<Skills key={index} category={category} />
				))}
			</div>
		</div>
	)
}
