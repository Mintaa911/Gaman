import React from "react";

const Card = ({ val, icon, text }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			<p
				style={{
					backgroundColor: "#E50F1C",
					color: "white",
					height: "30px",
					width: "30px",
					padding: 10,
					borderRadius: "50px",
					textAlign: "center",
					fontSize: "20px",
					fontWeight: 700,
				}}
			>
				{val}
			</p>
			<hr
				width='40'
				size='5'
				style={{
					backgroundColor: "#E50F1C",
					margin: 0,
					border: "none",
				}}
			/>
			<div
				style={{
					boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
					width: "320px",
					height: "60px",
					borderRadius: "10px",
					display: "flex",
					flexDirection: "row",
					// justifyContent: "sp",
					alignItems: "center",
				}}
			>
				<div
					style={{
						backgroundColor: "#E50F1C",
						width: "fit-content",
						padding: 10,
						borderRadius: 4,
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						marginRight: 20,
						marginLeft: 10,
					}}
				>
					{icon}
				</div>
				<p style={{ fontWeight: 700, fontSize: "18px" }}>{text}</p>
			</div>
		</div>
	);
};

export default Card;
