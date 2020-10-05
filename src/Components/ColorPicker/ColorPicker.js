import React from "react";
import "./colorPicker.css";
import { useRecoilState } from "recoil";
import { canvasBackgroundColorState } from "../../Atoms/canvasBackgroundColorState";

function ColorPicker(props) {
	const [backgroundColor, setBackgroundColor] = useRecoilState(
		canvasBackgroundColorState
	);

	return (
		<div className="colorPicker">
			<label htmlFor="colorPickerInput">
				change canvas color to random color:
				<input
					id="colorPickerInput"
					type="color"
					value={backgroundColor}
					onChange={({ target }) => setBackgroundColor(target.value)}
				/>
			</label>
		</div>
	);
}

export default ColorPicker;
