import { useState } from "react"

export function PDFViewer({
	pdf,
	w,
	h,
}: {
	pdf: string
	w: number
	h: number
}) {
	const [width, setWidth] = useState(w + "px")
	const [height, setHeight] = useState(h + "px")

	return <iframe src={pdf} width={width} height={height}></iframe>
}
