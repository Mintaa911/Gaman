import React from "react";
import polygon1 from "../../assets/polygon1.png";
import polygon2 from "../../assets/polygon2.png";
import fadedPolygon from "../../assets/fadedPolygon.png";
import curlyLine from "../../assets/curlyLine.png";

const FifthSection = () => {
	return (
		<div
			style={{
				margin: "40px 0px 30px 0px",
				padding: "30px 20px 30px 20px",
				display: "flex",
				flexDirection: "row",
				backgroundColor: "rgba(146, 0, 0, 0.1)",
				borderRadius: 20,
			}}
		>
			<div style={{ width: "40%" }}>
				<p style={{ fontSize: "40px", fontWeight: 700 }}>
					Monetize &amp; Engage Your <span style={{ color: "red" }}>Fans</span>{" "}
					with Personalized Games
				</p>
			</div>
			<div>
				<img
					src={polygon2}
					alt=''
					style={{ position: "relative", top: "-20px" }}
				/>
				<img
					src={polygon1}
					alt=''
					style={{ position: "relative", top: "10px" }}
				/>
				<img
					src={fadedPolygon}
					alt=''
					style={{ position: "relative", top: "-20px" }}
				/>
			</div>
			<div
				style={{
					alignSelf: "end",
					position: "relative",
					top: "20px",
					left: "-60px",
				}}
			>
				<img src={curlyLine} alt='' />
			</div>
			<div
				style={{
					flexGrow: 2,
					position: "relative",
					top: "20px",
					left: "-100px",
				}}
			>
				<p style={{ fontSize: "25px", fontWeight: 500 }}>#gamanforcreators</p>
				<button
					className='customBtn'
					style={{
						display: "flex",
						flexDirection: "col",
						alignItems: "center",
						padding: "20px",
						borderRadius: 30,
					}}
				>
					<span style={{ marginLeft: "5px" }}>Get Started with Gaman</span>
				</button>
			</div>
		</div>
	);
};

export default FifthSection;
