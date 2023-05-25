import React from "react";
import logo from "../assets/gamanLogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
	const setActiveLink = (e) => {
		// easier for me, you can change with getElementById or getElementByClassName
		const links = document.getElementsByTagName("a");

		Array.from(links).forEach((el) => el.classList.remove("active"));
		e.target.classList.add("active");
	};
	return (
		<nav style={{ position: "fixed", zIndex: "1" }}>
			<div className='inner-container'>
				<div id='navbar'>
					<div id='logo'>
						<img src={logo} alt='website logo' />
					</div>
					<div id='links'>
						<Link to={"/"} onClick={setActiveLink}>
							Home
						</Link>
						<Link to={"/"} onClick={setActiveLink}>
							About Us
						</Link>
						<Link to={"/"} onClick={setActiveLink}>
							Creator Zone
						</Link>
					</div>
					<div className='btnContainer'>
						<button className='customBtn' style={{ marginTop: "5%" }}>
							Login
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
