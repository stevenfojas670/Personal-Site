import "./App.css"
import NavBar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Experience from "./Experience"
import Contact from "./Contact"
import Footer from "./Footer"
import Certifications from "./Certifications"

function App() {
	return (
		<div className="bg-foreground text-secondary">
			<NavBar />
			<Hero />
			<About />
			<Experience />
			<Certifications />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
