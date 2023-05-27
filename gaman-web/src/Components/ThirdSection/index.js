import React from "react";
import TopCreatorCard from "./TopCreatorCard";

const ThirdSection = () => {
	return (
		<div style={{ marginBottom: "70px" }}>
			<div
				style={{
					position: "absolute",
					right: "0px",
					width: "371px",
					height: "151px",
					background:
						"linear-gradient(to bottom left, #E50F1C 0%, white 51%, white 100%)",
					opacity: "0.3",
				}}
			></div>
			<p
				style={{
					fontWeight: 600,
					textAlign: "center",
					fontSize: "30px",
					width: "50%",
					margin: "auto",
					paddingTop: "20px",
				}}
			>
				GET INSPIRE WITH OUR TOP CREATORS ON THE PLATFORM
			</p>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<TopCreatorCard />
				<TopCreatorCard />
				<TopCreatorCard />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: "20px",
					justifyContent: "center",
				}}
			>
				<hr
					width='8'
					size='10'
					style={{
						backgroundColor: "#D9D9D9",
						margin: 0,
						marginRight: "10px",
						borderRadius: 10,
						border: "0px",
					}}
				/>
				<hr
					width='8'
					size='10'
					style={{
						backgroundColor: "#E50F1C",
						margin: 0,
						marginRight: "10px",
						borderRadius: 10,
						border: "0px",
					}}
				/>
				<hr
					width='8'
					size='10'
					style={{
						backgroundColor: "#D9D9D9",
						margin: 0,
						marginRight: "10px",
						borderRadius: 10,
						border: "0px",
					}}
				/>
				<hr
					width='8'
					size='10'
					style={{
						backgroundColor: "#D9D9D9",
						margin: 0,
						marginRight: "10px",
						borderRadius: 10,
						border: "0px",
					}}
				/>
			</div>
		</div>
	);
};

export default ThirdSection;
