import "./App.css"
import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import { Skills } from "./components/components/Skills"
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { languages, certifications, tools, libraries } from "./data"

function App() {
	return (
		<div className="bg-neutral-950 text-neutral-50">
			<NavBar />
			<Hero />
			<Skills skills={certifications} />
			<About />
			<Skills skills={languages} />
			<Experience />
			<Skills skills={tools} />
			<Projects />
			<Skills skills={libraries} />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
