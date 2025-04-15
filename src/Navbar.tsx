import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { Button, buttonVariants } from "./components/ui/button"

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
		href: "#projects",
		label: "Projects",
	},
	{
		href: "#contact",
		label: "Contact",
	},
]

export default function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<header className="top-0 border-b-1 z-40 w-full ">
			<div className="container justify-self-center">
				{/* mobile */}
				<div className="mx-auto">
					<nav className="lg:hidden flex gap-2 justify-between text-xl px-4">
						<div>
							<button>
								<a href="#" className="flex items-center py-4 px-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
										/>
									</svg>
								</a>
							</button>
						</div>
						<div>
							<button onClick={() => setIsOpen(!isOpen)}>
								<a className="flex items-center py-4 px-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
										/>
									</svg>
								</a>
							</button>
						</div>
					</nav>
				</div>
				{/* desktop */}
				<nav className="hidden lg:flex justify-center py-4 space-x-4">
					<div className="space-x-4">
						{routeList.map((route, index) => (
							<a rel="noreferrer noopener" key={index} href={route.href}>
								<Button className="bg-transparent text-secondary hover:bg-secondary/20">
									{route.label}
								</Button>
							</a>
						))}
					</div>
					<div id="social-links" className="flex items-center">
						<a
							rel="noreferrer noopener"
							href="https://www.linkedin.com/in/steven-fojas-8a1516241/"
							target="__blank"
						>
							<Button className="bg-transparent text-secondary hover:bg-secondary/20">
								<FaLinkedin size={20} />
							</Button>
						</a>
					</div>
				</nav>
				{/* mobile menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ maxHeight: 0 }}
							animate={{ maxHeight: 500 }}
							exit={{ maxHeight: 0 }}
							transition={{ ease: "easeIn", duration: 0.4 }}
							className="overflow-hidden"
						>
							<div className="flex flex-col justify-center px-4 py-4 gap-2 text-center">
								{routeList.map((route, index) => (
									<a
										href={route.href}
										key={index}
										className="py-1 border-b border-neutral-600"
									>
										{route.label}
									</a>
								))}
								<a
									rel="noreferrer noopener"
									href="https://www.linkedin.com/in/steven-fojas-8a1516241/"
									target="__blank"
								>
									<button className="hover:bg-neutral-800 rounded-md transition-all duration-100 hover:cursor-pointer px-4 py-2">
										<FaLinkedin size={20} />
									</button>
								</a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	)
}
