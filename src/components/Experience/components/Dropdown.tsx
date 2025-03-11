import { useState } from "react"
import { motion } from "framer-motion"

export function Dropdown({ props }: { props: any }) {
	const [expandedTitle, setExpandedTitle] = useState<string | null>(null)

	const toggleExpand = (title: string) => {
		setExpandedTitle(expandedTitle === title ? null : title)
	}
	return (
		<div className="bg-neutral-500 py-4 px-4 rounded-md mb-3 drop-shadow-md">
			<div
				className={`flex ${expandedTitle === props.title ? "mb-3" : ""} gap-3`}
			>
				<div>{props.title}</div>
				<button
					className="cursor-pointer"
					onClick={() => toggleExpand(props.title)}
				>
					{expandedTitle === props.title ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6 hover:text-gray-400"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6 hover:text-gray-400"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					)}
				</button>
			</div>
			<motion.div
				initial={{ height: 0, opacity: 0 }}
				animate={
					expandedTitle === props.title
						? { height: "auto", opacity: 1 }
						: { opacity: 0 }
				}
				transition={{ ease: "easeInOut", duration: 0.8 }}
				className="overflow-hidden"
			>
				{expandedTitle === props.title && (
					<>
						{props.description.map((point: any, descIndex: any) => (
							<div key={descIndex} className="flex props-start gap-2 mb-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 text-green-500 shrink-0 mt-1"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m4.5 12.75 6 6 9-13.5"
									/>
								</svg>
								<span>{point}</span>
							</div>
						))}
					</>
				)}
			</motion.div>
		</div>
	)
}
