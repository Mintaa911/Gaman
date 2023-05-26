import React from "react";
import homeScreen from "../assets/homeScreen.png";
import star from "../assets/star.png";
import fadeStar from "../assets/fadeStar.svg";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StepCard from "./SecondSection/StepCard";

const SecondSection = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				padding: 0,
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
				<StepCard
					val={1}
					icon={<PersonAddAltIcon style={{ color: "white" }} />}
					text={"Create your account"}
				/>
				<StepCard
					val={2}
					icon={<SportsEsportsIcon style={{ color: "white" }} />}
					text={"Select a game"}
				/>
				<StepCard
					val={3}
					icon={<EmojiEventsIcon style={{ color: "white" }} />}
					text={"Create your first contests or tournament."}
				/>
				<StepCard
					val={4}
					icon={<AttachMoneyIcon style={{ color: "white" }} />}
					text={"Share the link with your audience and start earning"}
				/>
			</div>
		</div>
	);
};

export default SecondSection;
