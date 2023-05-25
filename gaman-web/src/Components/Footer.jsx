import { Link } from "react-router-dom";
import logo from "../assets/gamanLogoWhite.svg";
import instagram from "../assets/insta.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
	return (
		<div
			style={{
				color: "white",
				paddingTop: "2%",
				height: "fit-content",
				background:
					"linear-gradient(180deg, #E50F1C -38.3%, rgba(146, 0, 0, 0.89) 198.94%), #FFFFFF",
				marginTop: "auto",
			}}
		>
			<div
				className='inner-container'
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div
					style={{ display: "flex", flexDirection: "column", flexGrow: "3" }}
				>
					<img src={logo} alt='website logo' width={200} />
					<p>Made with 🤍 in India</p>
				</div>
				<hr width='1' size='170' style={{ backgroundColor: "white" }} />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						flexGrow: "1",

						paddingLeft: "10px",
					}}
				>
					<Link to={"/"} style={{ color: "white", margin: "6px" }}>
						About Us
					</Link>
					<Link to={"/"} style={{ color: "white", margin: "6px" }}>
						Privacy Policy
					</Link>
					<Link to={"/"} style={{ color: "white", margin: "6px" }}>
						Term &amp; Condition
					</Link>
					<Link to={"/"} style={{ color: "white", margin: "6px" }}>
						Careers
					</Link>
					<Link to={"/"} style={{ color: "white", margin: "6px" }}>
						Creator Zone
					</Link>
				</div>
				<hr width='1' size='170' style={{ backgroundColor: "white" }} />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						flexGrow: "1",
						paddingLeft: "10px",
					}}
				>
					<p>Follow us on</p>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<img src={instagram} alt='Instagram Icon' />
						<img src={facebook} alt='Facebook Icon' />
						<img src={twitter} alt='Twitter Icon' />
						<img src={linkedin} alt='Linkedin Icon' />
						<img src={youtube} alt='Youtube Icon' />
					</div>
					<p>support@gaman.in</p>
					<button
						style={{
							color: "white",
							backgroundColor: "transparent",
							backgroundRepeat: "no-repeat",
							padding: "10px 15px 10px 15px",
							border: "2px solid white",
							borderRadius: "10px",
							width: "fit-content",
						}}
					>
						Contact Us
					</button>
				</div>
			</div>
			<div
				style={{
					marginBottom: 0,
					display: "flex",
					justifyContent: "center",
					marginTop: "2%",
					paddingTop: "1%",
					paddingBottom: "1%",
					background:
						"linear-gradient(180deg, rgba(229, 15, 28, 0.6) 0%, rgba(146, 0, 0, 0.534) 100%)",
				}}
			>
				<p style={{ margin: 0, padding: 0 }}>
					Copyright © 2023 Gaman Pvt. Ltd. All Rights Reserved.{" "}
				</p>
			</div>
		</div>
	);
};

export default Footer;
