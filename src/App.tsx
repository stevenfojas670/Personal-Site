import "./App.css"
import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience/Experience"
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
			<Contact />
			<Footer />
		</div>
	)
}

export default App
