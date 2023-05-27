import React from "react";
import homeScreen from "../../assets/homeScreen.png";
import star from "../../assets/star.png";
import fadeStar from "../../assets/fadeStar.svg";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StepCard from "./StepCard";

import "./index.css";

const SecondSection = () => {
	return (
		<div id='section-two'>
			<div id='section-two-left'>
				<div id='blurBackground1'></div>
				<div id='imageDiv'>
					<img src={homeScreen} alt='home screen' width={400} />
				</div>
			</div>
			<div id='section-two-middle'>
				<img src={star} alt='star' />
				<img id='fadedStar' src={fadeStar} alt='star' />
			</div>
			<div id='section-two-right'>
				<p>FOUR SIMPLE</p>
				<div>
					<hr id='line1' width='50' size='7' style={{}} />
					<hr id='line2' width='5' size='7' />
					<span style={{ fontSize: "40px", fontWeight: 600 }}>STEPS</span>
				</div>
				<StepCard
					val={1}
					icon={<PersonAddAltIcon style={{ color: "white" }} />}
					text={"Create your account"}
					selected={true}
				/>
				<StepCard
					val={2}
					icon={<SportsEsportsIcon style={{ color: "white" }} />}
					text={"Select a game"}
					selected={false}
				/>
				<StepCard
					val={3}
					icon={<EmojiEventsIcon style={{ color: "white" }} />}
					text={"Create your first contests or tournament."}
					selected={false}
				/>
				<StepCard
					val={4}
					icon={<AttachMoneyIcon style={{ color: "white" }} />}
					text={"Share the link with your audience and start earning"}
					selected={false}
				/>
			</div>
		</div>
	);
};

export default SecondSection;
