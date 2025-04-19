import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { Button } from "./components/ui/button"
import { IoMenu } from "react-icons/io5"
import { IoHomeSharp } from "react-icons/io5"

interface RouteProps {
	href: string
	label: string
}

const routeList: RouteProps[] = [
	{
		href: "#about",
		label: "About",
	},
	{
		href: "#experience",
		label: "Experience",
	},
	{
		href: "#certifications",
		label: "Certifications",
	},
	{
		href: "#projects",
		label: "Projects",
	},
	{
		href: "#contact",
		label: "Contact",
	},
	{
		href: "https://www.linkedin.com/in/steven-fojas-8a1516241/",
		label: "LinkedIn",
	},
	{
		href: "https://github.com/stevenfojas670",
		label: "GitHub",
	},
]

export default function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<header className="top-0 border-b-1 border-border z-40 w-full sticky bg-background">
			<div className="">
				{/* mobile */}
				<div className="mx-auto">
					<nav className="md:hidden flex gap-2 justify-between text-xl px-4">
						<div>
							<a href="#" className="flex items-center py-4 px-2 text-2xl">
								<button>
									<IoHomeSharp />
								</button>
							</a>
						</div>
						<div>
							<a className="flex items-center py-4 px-2 text-2xl">
								<button onClick={() => setIsOpen(!isOpen)}>
									<IoMenu />
								</button>
							</a>
						</div>
					</nav>
				</div>
				{/* mobile menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ maxHeight: 0 }}
							animate={{ maxHeight: 500 }}
							exit={{ maxHeight: 0 }}
							transition={{ ease: "easeInOut", duration: 0.2 }}
							className="overflow-hidden"
						>
							<ul className="flex flex-col justify-center px-4 py-4 gap-2">
								{routeList.map((route, index) => (
									<li key={index}>
										<a href={route.href} key={index} className="py-1 text-xl">
											{route.label}
										</a>
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
				{/* desktop */}
				<nav className="hidden md:flex justify-center py-4 space-x-4">
					<div className="space-x-4">
						{routeList.map((route, index) => (
							<a rel="noreferrer noopener" key={index} href={route.href}>
								<Button variant="link" className="text-secondary">
									{route.label}
								</Button>
							</a>
						))}
					</div>
				</nav>
			</div>
		</header>
	)
}
