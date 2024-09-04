import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import config from "../../config/config";

import { download } from "../../assets";
import { reader, downloadCanvasToImage } from "../../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../../config/constants";
import { fadeAnimation, slideAnimation } from "../../config/motion";
import { FilePicker, AIPicker, Tab, ColorPicker } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
	changeFullDecal,
	changeLogoDecal,
	toggleFullTexture,
	toggleIntro,
	toggleLogoTexture,
} from "../../features/customizerSlice";

const Customizer = () => {
	const customizerState = useSelector((state) => state.customizer);
	const dispatch = useDispatch();
	const [file, setFile] = useState("");
	const [prompt, setPrompt] = useState("");
	const [generatingImg, setGeneratingImg] = useState("");
	const [activeEditorTab, setActiveEditorTab] = useState("");
	const [activeFilterTab, setActiveFilterTab] = useState({
		logoShirt: true,
		stylishShirt: false,
	});

	const generateTabContent = () => {
		switch (activeEditorTab) {
			case "colorpicker":
				return <ColorPicker />;
			case "filepicker":
				return (
					<FilePicker
						file={file}
						setFile={setFile}
						readFile={readFile}
						color={customizerState.color}
					/>
				);
			case "aipicker":
				return (
					<AIPicker
						prompt={prompt}
						setPrompt={setPrompt}
						generatingImg={generatingImg}
						handleSubmit={handleSubmit}
						color={customizerState.color}
					/>
				);

			default:
				return null;
		}
	};

	const handleSubmit = async (type) => {
		if (!prompt) return alert("Please enter a prompt");

		try {
			setGeneratingImg(true);
			const apiURL = process.env.REACT_APP_BACKEND_URL;
			const response = await fetch(apiURL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ prompt }),
			});

			const result = await response.json();
			handleDecals(type, `data:image/png;base64,${result.photo}`);
		} catch (error) {
			alert(error.message);
		} finally {
			setGeneratingImg(false);
			setPrompt("");
			setActiveEditorTab("");
		}
	};

	const handleDecals = (type, res) => {
		const decalType = DecalTypes[type];
		const isLogo = decalType.stateProperty === "logoDecal" ? true : false;
		if (isLogo) {
			dispatch(changeLogoDecal(res));
		} else {
			dispatch(changeFullDecal(res));
		}

		if (!activeFilterTab[decalType.filterTab]) {
			handleActiveFilterTab(decalType.filterTab);
		}
	};

	const handleActiveFilterTab = (tabName) => {
		switch (tabName) {
			case "logoShirt":
				dispatch(toggleLogoTexture());
				break;
			case "stylishShirt":
				dispatch(toggleFullTexture());
				break;
			default:
				dispatch(toggleLogoTexture(true));
				dispatch(toggleFullTexture(false));
				break;
		}

		setActiveFilterTab((prev) => {
			return {
				...prev,
				[tabName]: !prev[tabName],
			};
		});
	};

	const readFile = (type) => {
		reader(file).then((res) => {
			handleDecals(type, res);
			setActiveEditorTab("");
		});
	};

	return (
		<AnimatePresence>
			{!customizerState.intro && (
				<>
					<motion.div
						key="custom"
						className="absolute top-0 left-0 z-10"
						{...slideAnimation("left")}
					>
						<div className="flex items-center min-h-screen">
							<div className="editortabs-container tabs">
								{EditorTabs.map((tab) => (
									<Tab
										key={tab.name}
										tab={tab}
										handleClick={() =>
											setActiveEditorTab(tab.name)
										}
									/>
								))}
								{generateTabContent()}
							</div>
						</div>
					</motion.div>

					<motion.div
						className="absolute z-10 top-24 right-5"
						{...fadeAnimation}
					>
						<button
							onClick={() => dispatch(toggleIntro())}
							className="w-fit px-4 py-2.5 text-white 
				bg-blue hover:bg-blue-secondary rounded"
						>
							Go Back
						</button>
					</motion.div>

					<motion.div
						className="filtertabs-container"
						{...slideAnimation("up")}
					>
						{FilterTabs.map((tab) => (
							<Tab
								key={tab.name}
								tab={tab}
								isFilterTab
								isActiveTab={activeFilterTab[tab.name]}
								handleClick={() =>
									handleActiveFilterTab(tab.name)
								}
							/>
						))}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Customizer;
