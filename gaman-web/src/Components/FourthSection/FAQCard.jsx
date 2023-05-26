import React from "react";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

const FAQCard = ({ text }) => {
	return (
		<div
			style={{
				backgroundColor: "rgba(146, 0, 0, 0.1)",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				width: "200",
				justifyContent: "space-between",
				padding: "0px 20px 0px 20px",
				borderRadius: 10,
				margin: "10px 0px 10px 0px",
			}}
		>
			<p style={{}}>{text}</p>
			<ExpandCircleDownOutlinedIcon />
		</div>
	);
};

export default FAQCard;
