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
				d="M22.277 20.7632C22.277 20.7632 19.1243 23.2917 12.8506 22.2454C8.09076 21.4515 5.55211 16.2045 5.55211 13.3842C5.55211 6.69745 10.5012 5.17576 13.8471 5.17576C17.193 5.17576 19.3757 8.43783 19.3757 10.9635C19.3757 13.4892 17.5893 15.6983 14.8094 15.6983C12.0295 15.6983 11.2062 13.7467 11.2062 11.9524C11.2062 10.1581 12.6579 9.52598 13.9818 9.52598C15.3057 9.52598 15.759 10.6563 15.759 11.6277C15.759 12.5992 15.0053 12.9471 14.3766 12.9471C13.7479 12.9471 13.6857 12.6299 13.4451 12.2966C13.2045 11.9633 13.752 10.7016 12.8506 10.7016C11.9491 10.7016 11.7811 12.152 11.7811 12.152C11.7811 12.152 12.1097 14.9518 14.8094 14.9035C17.5092 14.8552 18.7899 12.768 18.4177 10.7016C18.0455 8.63521 16.0401 6.43942 12.5204 6.88312C9.00082 7.32682 7.5638 10.8831 8.19722 14.6835C8.83063 18.4839 13.3835 20.6859 16.9633 19.8937C20.543 19.1015 24.1084 16.5099 24.1084 9.93921C24.1084 3.36848 18.4177 -0.581127 11.6321 0.0697898C4.84641 0.720704 0.634188 6.65316 0.903807 13.7811C1.17343 20.9091 7.93703 24.7912 13.6564 24.9913C19.3757 25.1914 22.8819 21.8806 22.8819 21.8806C22.8819 21.8806 23.6704 21.1775 23.3612 20.6284C23.0521 20.0793 22.277 20.7632 22.277 20.7632Z"
				className={childClasses || ""}
			/>
		</svg>
	)
}

export default Type
