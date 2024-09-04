import React from "react";
import { SketchPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../../features/customizerSlice";

const ColorPicker = () => {
	const customizerState = useSelector((state) => state.customizer);
	const dispatch = useDispatch();
	const handleOnchange = (color) => {
		if (color) {
			dispatch(changeColor(color));
		}
	};
	return (
		<div className="absolute left-full ml-3">
			<SketchPicker
				color={customizerState.color}
				disableAlpha
				presetColors={[
					"#ccc",
					"#EFBD4E",
					"#80C670",
					"#726DE8",
					"#353934",
					"#2CCCE4",
					"#ff8a65",
					"#7098DA",
					"#C19277",
					"#FF96AD",
					"#512314",
					"#5F1230",
				]}
				onChange={(color) => handleOnchange(color.hex)}
			/>
		</div>
	);
};

export default ColorPicker;
