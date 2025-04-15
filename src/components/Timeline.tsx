import { experiences as experienceData } from "@/data"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { BsArrowsAngleExpand } from "react-icons/bs"
import { BsArrowsAngleContract } from "react-icons/bs"
import { TbPointFilled } from "react-icons/tb"
import { useState } from "react"
import { useRef } from "react"

interface JobDetail {
	id: number
	title: string
	description: string[]
}

interface Job {
	id: number
	role: string
	company: string
	duration: string
	location: string
	tech: string[]
	details: JobDetail[]
}

export default function Timeline() {
	const jobRefs = useRef<Map<number, HTMLDivElement | null>>(new Map())
	const [expandedJobID, setExpandedJobID] = useState<number | null>(null)

	const expandCard = (job: Job) => {
		if (expandedJobID === job.id) {
			const ref = jobRefs.current.get(job.id)
			if (ref) {
				ref.scrollIntoView({ behavior: "smooth", block: "start" })
			}
			setExpandedJobID(null)
		} else {
			setExpandedJobID(job.id)
		}
	}

	return (
		<div>
			{experienceData.map((job, index) => {
				const isExpanded = expandedJobID === job.id
				const isLast = index === experienceData.length - 1
				return (
					<div
						key={job.id}
						ref={(el) => {
							jobRefs.current.set(job.id, el)
						}}
						id={job.role}
						className="flex m-4 relative"
					>
						<div
							className={`hidden lg:flex items-start w-44 pt-0.5 relative mr-2 ${
								isLast ? "overflow-hidden" : ""
							}`}
						>
							<div className="w-4/5 text-secondary translate-y-[18.5px] text-sm">
								{job.duration}
							</div>
							<div
								id="vertical-line"
								className="bg-accent w-[2px] rounded-full h-full translate-x-5 translate-y-10"
							></div>
							<div className="w-6 h-6 bg-accent rounded-full translate-x-[6.5px] translate-y-5 hover:border"></div>
						</div>
						<div className="bg-accent-foreground border-secondary/20 border rounded-lg px-8 py-6 w-full sm:w-xl">
							<div className="text-xl font-medium">{job.role}</div>
							<div>{job.company}</div>
							<div className="mb-4 sm:text-sm">
								{job.location} <span className="sm:hidden">{job.duration}</span>
							</div>
							<div className="lg:hidden mb-4">{job.duration}</div>
							{isExpanded ? (
								<div className="mb-4">
									{job.details.map((desc) => (
										<div key={desc.id} className="mb-4">
											<div className="flex gap-2 mb-2">
												<span>{desc.title}</span>
											</div>
											<div className="flex flex-col gap-2 text-secondary/80 text-[14px]">
												{desc.description.map((field, index) => (
													<div key={index} className="flex gap-2">
														<div className="translate-y-1">
															<TbPointFilled />
														</div>
														<span>{field}</span>
													</div>
												))}
											</div>
										</div>
									))}
								</div>
							) : (
								<div className="mb-4">
									{job.details.map((desc) => (
										<div key={desc.id} className="flex gap-2">
											<span>{desc.title}</span>
										</div>
									))}
								</div>
							)}

							<div className="flex flex-wrap mb-4 gap-1">
								{job.tech.map((tech, index) => (
									<Badge
										className="bg-secondary/10"
										variant="default"
										key={index}
									>
										{tech}
									</Badge>
								))}
							</div>
							<Button
								onClick={() => expandCard(job)}
								className="bg-accent hover:bg-accent/90"
							>
								{isExpanded ? (
									<BsArrowsAngleContract />
								) : (
									<BsArrowsAngleExpand />
								)}
								{isExpanded ? "Collapse" : "Details"}
							</Button>
						</div>
					</div>
				)
			})}
		</div>
	)
}
