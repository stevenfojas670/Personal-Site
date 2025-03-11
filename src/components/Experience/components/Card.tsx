import { Dropdown } from "./Dropdown"

export function Card({ props }: { props: any }) {
	return (
		<div className="bg-neutral-600 px-4 py-4 mb-3 rounded-md">
			<div className="mb-3">
				<div className="">{props.role}</div>
				<div className="">{props.company}</div>
				<div>{props.duration}</div>
			</div>
			{props.details.map((projects: any) => (
				<Dropdown props={projects} />
			))}
		</div>
	)
}
