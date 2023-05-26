import React from "react";

const TopCreatorCard = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<div
				style={{
					position: "relative",
					top: "45px",
					width: 80,
					height: 80,
					backgroundColor: "#D9D9D9",
					borderRadius: 50,
				}}
			></div>
			<div
				style={{
					width: "250px",
					minWidth: "fit-content",
					height: 100,
					backgroundColor: "#F6D8D9",
					borderRadius: 10,
					padding: "40px 20px 20px 20px",
				}}
			>
				<p
					style={{ textAlign: "center", fontWeight: 700, marginBottom: "30px" }}
				>
					Jaweria
				</p>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						// backgroundColor: "#0f0",
					}}
				>
					<div style={{}}>
						<p
							style={{
								margin: 0,
								padding: 0,
								fontSize: "20px",
								fontWeight: 700,
							}}
						>
							$234,223
						</p>
						<p
							style={{
								margin: 0,
								padding: 0,
								fontSize: "12px",
							}}
						>
							Total Earning
						</p>
					</div>
					<hr
						width='2'
						size='40'
						style={{ backgroundColor: "#BA9393", border: "0px" }}
					/>
					<div>
						<p
							style={{
								margin: 0,
								padding: 0,
								fontSize: "20px",
								fontWeight: 700,
							}}
						>
							5M
						</p>
						<p
							style={{
								margin: 0,
								padding: 0,
								fontSize: "12px",
							}}
						>
							Followers
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopCreatorCard;
