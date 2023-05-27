import React from "react";
import heroImage from "../../assets/heroImage.png";
import ring from "../../assets/ring.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./index.css";

const FirstSection = () => {
	return (
		<div id='section-one'>
			<div>
				<div id='blurBackground1'></div>
				<p id='heroText'>
					Monetize &amp; Engage Your <span>FANS</span> with Personalized Games
				</p>
				<p id='heroSubtext'>
					Unlock the Power of play and turn your passion into profits
					effortlessly.
				</p>
				<div id='section-one-get-started'>
					<button>
						<ArrowOutwardIcon />
						<span>Get Started</span>
					</button>
					<div>
						<img src={ring} alt='ring ' width={"50"} />
						<div id='blurBackground2'></div>
					</div>
				</div>
			</div>
			<div>
				<img src={heroImage} alt='Hero ' width={"400"} />
				<div id='blurBackground3'></div>
			</div>
		</div>
	);
};

export default FirstSection;
