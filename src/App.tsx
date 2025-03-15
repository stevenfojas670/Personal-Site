import "./App.css"
import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Skills } from "./components/components/Skills"
import { SidePanel } from "./components/Projects/SidePanel"

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
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
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
		{
			name: "Docker",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
		},
		{
			name: "AWS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
		},
	],
}

function App() {
	return (
		<div className="bg-neutral-50 font-primary">
			<div className="max-w-full">
				<div className="backdrop-blur-md border-b sticky top-0 z-100">
					<div className="component-div max-w-5xl mx-auto md:px-4">
						<NavBar />
					</div>
				</div>
				<div className="">
					<div className="component-div max-w-6xl mx-auto md:px-4">
						<Hero />
					</div>
				</div>
				<div className="">
					<div className="component-div max-w-6xl mx-auto md:px-4">
						<About />
					</div>
				</div>
				<div>
					<div className="component-div max-w-6xl mx-auto md:px-4">
						{Object.entries(skills).map((category, index) => (
							<Skills key={index} category={category} />
						))}
					</div>
				</div>
				<div>
					<div className="component-div max-w-6xl mx-auto md:px-4">
						<Experience />
					</div>
				</div>
				<div className="bg-neutral-400">
					<div className="component-div max-w-6xl mx-auto md:px-4">
						<Projects />
					</div>
				</div>
				<div className="">
					<div className="component-div max-w-6xl mx-auto md:px-4">
						<Contact />
					</div>
				</div>
				<div className="">
					<div className="component-div max-w-6xl mx-auto md:px-4">
						<Footer />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
