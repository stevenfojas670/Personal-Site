interface SectionProps {
	children: React.ReactNode
	id: string
}

function Section({ children, id }: SectionProps) {
	return (
		<section
			id={id}
			className="w-full flex justify-center border-b-1 border-border py-20 lg:py-20"
		>
			{children}
		</section>
	)
}

interface ContainerProps {
	children: React.ReactNode
}

function Container({ children }: ContainerProps) {
	return <div className="max-w-5xl text-start space-y-6 mx-3">{children}</div>
}

export { Section, Container }
