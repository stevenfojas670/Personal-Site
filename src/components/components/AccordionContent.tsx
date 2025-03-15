import { motion } from "framer-motion"
import { useState } from "react"

export function AccordionContent({ items }: { items: any }) {
	const [expandedTitle, setExpandedTitle] = useState<string | null>(null)
	const isExpanded = expandedTitle === items.title

	const toggleExpand = (title: string) => {
		setExpandedTitle(isExpanded ? null : title)
	}

	return (
		<div className="bg-neutral-300 py-4 px-4 rounded-md mb-3 drop-shadow-md">
			<button
				className="cursor-pointer w-full"
				onClick={() => toggleExpand(items.title)}
			>
				<div className="flex gap-3 transition duration-200 justify-between">
					<div className="flex-1 text-left">{items.title}</div>
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
			<motion.div
				initial={{ maxHeight: 0 }}
				animate={isExpanded ? { maxHeight: 1000 } : { maxHeight: 0 }}
				transition={{ ease: "easeIn" }}
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
		</div>
	)
}
