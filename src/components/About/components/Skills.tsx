export function Skills({ category }: { category: [string, any[]] }) {
	const [title, skills] = category

	return (
		<div className="justify-center gap-4 mt-6">
			<div className="mb-6 text-center">
				<h3 className="text-xl font-bold text-gray-300 capitalize">{title}</h3>

				{/* Horizontal Scroll Wrapper */}
				<div className="relative">
					{/* Scrollable Container */}
					<div className="flex md:flex-wrap overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-4 p-4 gap-3">
						{skills.map((skill) => (
							<div
								key={skill.name}
								className="flex flex-col items-center flex-shrink-0 w-24 snap-center"
							>
								<img
									src={skill.icon}
									alt={`${skill.name} icon`}
									className="w-20 h-20"
								/>
								<p className="text-md mt-2 text-gray-400">{skill.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
