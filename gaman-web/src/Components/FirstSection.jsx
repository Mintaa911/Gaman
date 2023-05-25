import React from "react";
import heroImage from "../assets/heroImage.png";
import ring from "../assets/ring.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const FirstSection = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				marginBottom: "20px",
				paddingBottom: "10px",
				backgroundColor: "#fff",
			}}
		>
			<div>
				<div
					style={{
						border: "2px solid black",
						position: "absolute",
						top: "150px",
						left: "10px",
						width: "271px",
						height: "151px",
						background:
							"linear-gradient(to bottom right, #E50F1C 0%, white 81%, white 100%)",
						// "linear-gradient(.25turn, #E50F1C -38.3%, rgba(146, 0, 0, 0.89) 198.94%), #FFFFFF",
						opacity: "0.8",
						filter: "blur(100px)",
					}}
				></div>
				<p
					style={{
						fontSize: "60px",
						fontWeight: 500,
						width: 600,
						padding: 0,
						margin: 0,
					}}
				>
					Monetize &amp; Engage Your{" "}
					<span style={{ color: "#E50F1C" }}>FANS</span> with Personalized Games
				</p>
				<p style={{ width: 400, fontWeight: 500 }}>
					Unlock the Power of play and turn your passion into profits
					effortlessly.
				</p>
				<div
					style={{
						marginTop: "40px",
						display: "flex",
						flexDirection: "row",
					}}
				>
					<button
						className='customBtn'
						style={{
							marginRight: "150px",
							display: "flex",
							flexDirection: "col",
							alignItems: "center",
						}}
					>
						<ArrowOutwardIcon />
						<span style={{ marginLeft: "5px" }}>Get Started</span>
					</button>
					<div>
						<img src={ring} alt='ring ' width={"50"} />
						<div
							style={{
								position: "absolute",
								top: "400px",
								left: "400px",
								width: "281px",
								height: "101px",
								background:
									"linear-gradient(90deg,white 0%,  #E50F1C 20%, white 81%, white 100%)",
								opacity: "0.2",
								filter: "blur(20px)",
							}}
						></div>
					</div>
				</div>
			</div>
			<div style={{}}>
				<img src={heroImage} alt='Hero ' width={"400"} />
				<div
					style={{
						position: "absolute",
						top: "270px",
						right: "0px",
						width: "371px",
						height: "251px",
						background:
							"linear-gradient(to top left, #E50F1C 0%, white 51%, white 100%)",
						opacity: "0.3",
						// filter: "blur(50px)",
					}}
				></div>
			</div>
		</div>
	);
};

export default FirstSection;
