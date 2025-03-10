export function Skills({ skills }: { skills: any }) {
	return (
		<div className="justify-center gap-4 mt-6">
			{Object.entries(skills).map(([category, items]) => (
				<div key={category} className="mb-6 text-center">
					<h3 className="text-xl font-bold text-gray-300 capitalize">
						{category}
					</h3>
					{/* Horizontal Scroll Wrapper */}
					<div className="relative">
						{/* Scrollable Container */}
						<div className="flex md:flex-wrap overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-4 p-4">
							{Object.entries(items).map(([name, data]) => (
								<div
									key={name}
									className="flex flex-col items-center flex-shrink-0 w-24 snap-center"
								>
									<img
										src={data.icon}
										alt={`${name} icon`}
										className="w-20 h-20"
									/>
									<p className="text-md mt-2 text-gray-400">{data.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
