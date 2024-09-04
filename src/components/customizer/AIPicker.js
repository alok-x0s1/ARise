import React from "react";
import { getContrastingColor } from "../../config/helpers";

const AIPicker = ({
	prompt,
	setPrompt,
	generatingImg,
	handleSubmit,
	color,
}) => {
	return (
		<div className="aipicker-container">
			<textarea
				placeholder="Ask AI..."
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				disabled={generatingImg}
				rows="5"
				required
				className={`aipicker-textarea ${generatingImg && "opacity-50"}`}
			/>
			<div className="flex flex-wrap gap-3">
				{generatingImg ? (
					<button
						className="w-fit px-6 py-2.5 rounded cursor-pointer"
						style={{
							backgroundColor: color,
							color: getContrastingColor(color),
						}}
					>
						Asking AI...
					</button>
				) : (
					<>
						<button
							className="w-fit px-6 py-2.5 rounded cursor-pointer"
							style={{
								backgroundColor: color,
								color: getContrastingColor(color),
							}}
							onClick={() => handleSubmit("logo")}
						>
							AI Logo
						</button>

						<button
							className="py-2 px-4 rounded cursor-pointer"
							style={{
								borderWidth: "1px",
								borderColor: color,
								color: getContrastingColor(color),
							}}
							onClick={() => handleSubmit("full")}
						>
							AI Full
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default AIPicker;
