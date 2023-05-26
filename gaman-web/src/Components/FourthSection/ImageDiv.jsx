import React from "react";
import faqImage from "../../assets/faqImage.png";
import faqBack from "../../assets/faqBack.png";
import faqStar from "../../assets/faqStar.png";

const ImageDiv = () => {
	return (
		<div style={{ position: "relative", top: "50px" }}>
			<img
				src={faqBack}
				alt=''
				width={150}
				style={{ position: "absolute", left: "100px", top: "60px" }}
			/>
			<img
				src={faqStar}
				alt=''
				width={50}
				style={{ position: "absolute", right: "-20px", bottom: "-15px" }}
			/>
			<img
				src={faqImage}
				alt=''
				width={400}
				height={300}
				style={{ position: "relative", left: "0px", top: "0px" }}
			/>
		</div>
	);
};

export default ImageDiv;
