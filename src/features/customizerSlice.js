import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	intro: true,
	color: "#EFBD48",
	isLogoTexture: false,
	isFullTexture: false,
	fullDecal: "/threejs.png",
	logoDecal: "/threejs.png",
};

const customizerSlice = createSlice({
	name: "customizer",
	initialState,
	reducers: {
		toggleIntro: (state) => {
			state.intro = !state.intro;
		},
		changeColor: (state, action) => {
			state.color = action.payload;
		},
		toggleLogoTexture: (state) => {
			state.isLogoTexture = !state.isLogoTexture;
		},
		toggleFullTexture: (state) => {
			state.isFullTexture = !state.isFullTexture;
		},
		changeLogoDecal: (state, action) => {
			state.logoDecal = action.payload;
		},
		changeFullDecal: (state, action) => {
			state.fullDecal = action.payload;
		},
	},
});

export const {
	toggleIntro,
	changeColor,
	toggleLogoTexture,
	toggleFullTexture,
	changeLogoDecal,
	changeFullDecal,
} = customizerSlice.actions;

export default customizerSlice.reducer;
