import "./App.css"
import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
	return (
		<div>
			<NavBar />
			<Hero />
			<About />
			<Projects />
			<Experience />
			<Certifications />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
