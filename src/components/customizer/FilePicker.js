import React from "react";
import { getContrastingColor } from "../../config/helpers";

const FilePicker = ({ file, setFile, readFile, color }) => {
	return (
		<div className="filepicker-container">
			<div className="flex-1 flex flex-col">
				<input
					id="file-upload"
					type="file"
					accept="image/*"
					onChange={(e) => setFile(e.target.files[0])}
				/>

				<label htmlFor="file-upload" className="filepicker-label">
					Uplaod file
				</label>

				<div className="mt-2 text-gray-500 text-xs truncate">
					{file === "" ? "No file selected" : file.name}
				</div>

				<div className="mt-4 flex flex-wrap gap-3">
					<button
						className="py-2 px-4 rounded cursor-pointer"
						style={{
							borderWidth: "1px",
							borderColor: color,
							color: getContrastingColor(color),
						}}
						disabled={file === ""}
						onClick={() => readFile("logo")}
					>
						Logo
					</button>

					<button
						className="w-fit px-6 py-2.5 rounded cursor-pointer"
						style={{
							backgroundColor: color,
							color: getContrastingColor(color),
						}}
						disabled={file === ""}
						onClick={() => readFile("full")}
					>
						Full
					</button>
				</div>
			</div>
		</div>
	);
};

export default FilePicker;
