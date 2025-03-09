import { useState } from "react"

export default function Navbar() {
	const [mobileMenuShown, setMobileMenuState] = useState<boolean>(false)

	const handleMobileMenuClick = () => {
		setMobileMenuState((prev) => !prev)
	}

	return (
		<nav className="bg-gray-100">
			<div className="px-6 mx-auto">
				<div className="flex justify-between md:justify-center">
					{/* Mobile Button */}
					<div className="md:hidden flex items-center">
						<button onClick={handleMobileMenuClick}>
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
						</button>
					</div>
					<div className="flex space-x-4">
						<div>
							<a href="#" className="flex items-center py-4 px-2 text-gray-700">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6 hover:text-gray-900"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
									/>
								</svg>
							</a>
						</div>
						{/* Primary Nav */}
						<div className="hidden md:flex items-center space-x-1">
							<a
								href="#About"
								className="py-4 px-3 text-gray-700 hover:text-gray-900"
							>
								About
							</a>
							<a
								href="#Projects"
								className="py-4 px-3 text-gray-700 hover:text-gray-900"
							>
								Projects
							</a>
							<a
								href="#Experience"
								className="py-4 px-3 text-gray-700 hover:text-gray-900"
							>
								Experience
							</a>
							<a
								href="#Certifications"
								className="py-4 px-3 text-gray-700 hover:text-gray-900"
							>
								Certifications
							</a>
							<a
								href="#Contact"
								className="py-4 px-3 text-gray-700 hover:text-gray-900"
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Mobile Menu */}
			<div className={`${mobileMenuShown ? "block" : "hidden"}`}>
				<a
					href="#About"
					className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
				>
					About
				</a>
				<a
					href="#Projects"
					className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
				>
					Projects
				</a>
				<a
					href="#Experience"
					className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
				>
					Experience
				</a>
				<a
					href="#Certifications"
					className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
				>
					Certifications
				</a>
				<a
					href="#Contact"
					className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
				>
					Contact
				</a>
			</div>
		</nav>
	)
}
