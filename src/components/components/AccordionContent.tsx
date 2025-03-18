import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export function AccordionContent({ items }: { items: any }) {
	const [expandedTitle, setExpandedTitle] = useState<string | null>(null)
	const isExpanded = expandedTitle === items.title

	const toggleExpand = (title: string) => {
		setExpandedTitle(isExpanded ? null : title)
	}

	return (
		<div className="md:border-b py-4 md:px-4 mb-3 drop-shadow-md">
			<button
				className="cursor-pointer w-full"
				onClick={() => toggleExpand(items.title)}
			>
				<div className="flex gap-3 transition duration-200 justify-between border-b md:border-none pb-2">
					<div className="flex-1 text-left ">{items.title}</div>
					<div>
						{isExpanded ? (
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
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						)}
					</div>
				</div>
			</button>
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={{ maxHeight: 0 }}
						animate={{ maxHeight: 500 }}
						exit={{ maxHeight: 0 }}
						transition={{ ease: "easeIn", duration: 0.4 }}
						className="overflow-hidden"
					>
						{items.description.map((point: any, descIndex: any) => (
							<div key={descIndex} className="flex items-start gap-2 mt-2">
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
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
