import { AccordionContent } from "./AccordionContent"

export function Accordion({ items }: { items: any }) {
	return (
		<div className="bg-neutral-600 px-4 py-4 mb-3 rounded-md">
			<div className="mb-3">
				<div className="">{items.role}</div>
				<div className="">{items.company}</div>
				<div>{items.duration}</div>
			</div>
			{items.details.map((items: any, index: any) => (
				<AccordionContent items={items} key={index} />
			))}
		</div>
	)
}

export default Accordion
