import React from "react";
import "../App.css";

import FirstSection from "../Components/FirstSection";
import Footer from "../Components/Footer";
import FourthSection from "../Components/FourthSection";
import Navbar from "../Components/Navbar";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";

function LandingPage() {
	return (
		<div className='container'>
			<Navbar />
			<main className='inner-container' style={{ marginTop: "100px" }}>
				<FirstSection />
				<SecondSection />
				<ThirdSection />
				<FourthSection />
			</main>
			<Footer />
		</div>
	);
}

export default LandingPage;
