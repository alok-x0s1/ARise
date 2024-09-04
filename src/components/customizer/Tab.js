import React from "react";
import { useSelector } from "react-redux";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
	const customizerState = useSelector((state) => state.customizer);

	const activeStyles =
		isFilterTab && isActiveTab
			? { backgroundColor: customizerState.color, opacity: 0.5 }
			: {
					backgroundColor: "transparent",
					opacity: 1,
			  };
	return (
		<div
			key={tab.name}
			className={`tab-btn ${
				isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
			}`}
			style={activeStyles}
			onClick={handleClick}
		>
			<img
				src={tab.icon}
				alt={tab.name}
				className={`${isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12"}`}
			/>
		</div>
	);
};

export default Tab;
