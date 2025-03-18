export function Skills({ skills }: { skills: any }) {
	return (
		<section className="border-b border-t border-neutral-400 overflow-hidden">
			<div className="container mx-auto">
				<div
					className="flex justify-start md:justify-center space-x-4 overflow-x-auto snap-x snap-mandatory p-4 
					scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-neutral-700 pl-4"
				>
					{skills.map((skill: any) => (
						<div
							key={skill.name}
							className="flex flex-col items-center flex-shrink-0 w-24 snap-center"
						>
							<img
								src={skill.icon}
								alt={`${skill.name} icon`}
								className="w-15 h-15 drop-shadow-md"
							/>
							<p className="text-md mt-2 text-neutral-50">{skill.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
