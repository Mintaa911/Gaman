import React from "react";

const Card = ({ val, icon, text, selected }) => {
	return (
		<div className='step-card-container'>
			<p
				className='step'
				style={{
					backgroundColor: selected ? "#E50F1C" : "#E9E9E9",
					color: selected ? "white" : "black",
				}}
			>
				{val}
			</p>
			<hr
				width='40'
				size='5'
				style={{
					backgroundColor: selected ? "#E50F1C" : "#E9E9E9",
					border: "none",
				}}
			/>
			<div className='card'>
				<div className='card-icon'>{icon}</div>
				<p className='card-text'>{text}</p>
			</div>
		</div>
	);
};

export default Card;
