import { AccordionContent } from "./AccordionContent"

export function Accordion({ items }: { items: any }) {
	return (
		<div className="md:px-4 py-4 md:border md:rounded-md mb-10">
			<div className="mb-3">
				<div className="">{items.role}</div>
				<div className="">{items.company}</div>
				<div>{items.duration}</div>
			</div>
			<div className="">
				{items.details.map((items: any, index: any) => (
					<AccordionContent items={items} key={index} />
				))}
			</div>
		</div>
	)
}

export default Accordion
