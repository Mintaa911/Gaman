import React from "react";
import FAQCard from "./FAQCard";
import ImageDiv from "./ImageDiv";
const FourthSection = () => {
	return (
		<div style={{ width: "100%" }}>
			<div
				style={{
					border: "2px solid black",
					position: "absolute",
					left: "0px",
					width: "271px",
					height: "151px",
					background:
						"linear-gradient(to bottom right, #E50F1C 0%, white 81%, white 100%)",
					opacity: "0.8",
					filter: "blur(100px)",
				}}
			></div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				<div style={{ marginRight: "100px" }}>
					<ImageDiv />
				</div>
				<div
					style={{
						flexGrow: "2",
						marginTop: 0,
						padding: 0,
						position: "relative",
					}}
				>
					<p
						style={{
							textAlign: "center",
							fontSize: "40px",
							fontWeight: 600,
							marginTop: 0,
							padding: 0,
						}}
					>
						FAQ Section
					</p>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<FAQCard text={"How is this different from other apps?"} />
						<FAQCard text={"Why should I trust Gaman"} />
						<FAQCard text={"When will I get the money earned in my account"} />
						<FAQCard text={"What is the Main Reason for using this platform"} />
						<FAQCard
							text={"What makes this different from other platforms? "}
						/>
					</div>
					<div
						style={{
							position: "absolute",
							top: "420px",
							right: "-70px",
							width: "271px",
							height: "51px",
							background:
								"linear-gradient(to top left, #E50F1C 0%, white 100%)",
							opacity: "0.7",
							filter: "blur(30px)",
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default FourthSection;
