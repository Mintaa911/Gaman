import React from "react";
import homeScreen from "../assets/homeScreen.png";
import star from "../assets/star.png";
import fadeStar from "../assets/fadeStar.svg";

const SecondSection = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				// justifyContent: "space-between",
				marginBottom: "20px",
				// backgroundColor: "#0f0",
			}}
		>
			<div style={{ marginRight: "80px" }}>
				<div
					style={{
						position: "absolute",
						width: "500px",
						height: "200px",
						top: "780px",
						background:
							"linear-gradient(180deg, #E50F1C -38.3%, rgba(146, 0, 0, 0.89) 198.94%), #FFFFFF",
						opacity: "0.2",
						borderBottomLeftRadius: 30,
						borderBottomRightRadius: 30,
					}}
				></div>
				<div
					style={{
						position: "relative",
						left: "50px",
						top: "20px",
					}}
				>
					<img src={homeScreen} alt='home screen' width={400} />
				</div>
			</div>
			<div style={{ marginRight: "100px", position: "relative", top: "-50px" }}>
				<img src={star} alt='star' />
				<img
					src={fadeStar}
					alt='star'
					style={{ opacity: "0.5", position: "relative", top: "-20px" }}
				/>
			</div>
			<div style={{ position: "relative", top: "-100px" }}>
				<p
					style={{
						fontSize: "40px",
						fontWeight: 600,
						padding: 0,
						margin: 0,
					}}
				>
					FOUR SIMPLE
				</p>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "start",
						alignItems: "center",
						padding: 0,
						margin: 0,
					}}
				>
					<hr
						width='50'
						size='7'
						style={{
							backgroundColor: "black",
							margin: 0,
							marginRight: "10px",
							borderRadius: 5,
						}}
					/>
					<hr
						width='5'
						size='7'
						style={{
							backgroundColor: "black",
							margin: 0,
							marginRight: "10px",
							borderRadius: 10,
						}}
					/>
					<span style={{ fontSize: "40px", fontWeight: 600 }}>STEPS</span>
				</div>
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
						1
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
						}}
					></div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<p
						style={{
							backgroundColor: "#E9E9E9",
							color: "black",
							height: "30px",
							width: "30px",
							padding: 10,
							borderRadius: "50px",
							textAlign: "center",
							fontSize: "20px",
							fontWeight: 700,
						}}
					>
						2
					</p>
					<hr
						width='40'
						size='5'
						style={{
							backgroundColor: "#E9E9E9",
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
						}}
					></div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<p
						style={{
							backgroundColor: "#E9E9E9",
							color: "black",
							height: "30px",
							width: "30px",
							padding: 10,
							borderRadius: "50px",
							textAlign: "center",
							fontSize: "20px",
							fontWeight: 700,
						}}
					>
						3
					</p>
					<hr
						width='40'
						size='5'
						style={{
							backgroundColor: "#E9E9E9",
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
						}}
					></div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<p
						style={{
							backgroundColor: "#E9E9E9",
							color: "black",
							height: "30px",
							width: "30px",
							padding: 10,
							borderRadius: "50px",
							textAlign: "center",
							fontSize: "20px",
							fontWeight: 700,
						}}
					>
						4
					</p>
					<hr
						width='40'
						size='5'
						style={{
							backgroundColor: "#E9E9E9",
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
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
