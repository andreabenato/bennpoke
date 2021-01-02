import * as React from "react"
import clsx from "clsx"

interface Props {
	classes?: string
	childClasses?: string
}

const Type: React.FC<Props> = ({ classes, childClasses }) => {
	return (
		<svg
			className={classes || ""}
			width="25"
			height="25"
			viewBox="0 0 25 25"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.42534 0.0285945C7.42049 0.0145976 7.43092 0 7.44572 0H16.2559C16.2653 0 16.2737 0.00615274 16.2765 0.0151768L20.3231 13.0892C20.3274 13.1031 20.317 13.1171 20.3025 13.1171H14.4372C14.4301 13.1171 14.4249 13.1239 14.4269 13.1308L17.7908 24.9724C17.7973 24.9954 17.7672 25.0104 17.7529 24.9913L4.6803 7.60682C4.66962 7.59261 4.67975 7.57233 4.69752 7.57233H10.0207C10.0281 7.57233 10.0333 7.56503 10.0309 7.55802L7.42534 0.0285945Z"
				className={childClasses || ""}
			/>
		</svg>
	)
}

export default Type
