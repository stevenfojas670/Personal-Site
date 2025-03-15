export function Skills({ category }: { category: [string, any[]] }) {
	const [title, skills] = category

	return (
		<div className="gap-4 mb-6 text-center overflow-hidden">
			<h3 className="text-xl font-bold capitalize">{title}</h3>
			<div className="flex md:flex-wrap md:justify-center overflow-x-auto snap-x snap-point space-x-4 p-4 gap-3">
				{skills.map((skill) => (
					<div
						key={skill.name}
						className="flex flex-col items-center flex-shrink-0 w-24 snap-center"
					>
						<img
							src={skill.icon}
							alt={`${skill.name} icon`}
							className="w-15 h-15 drop-shadow-md"
						/>
						<p className="text-md mt-2">{skill.name}</p>
					</div>
				))}
			</div>
		</div>
	)
}
