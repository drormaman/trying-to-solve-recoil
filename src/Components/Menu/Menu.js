import React, { useState } from "react";
import "./menu.css";
import { useRecoilState } from "recoil";
import { rectsIdsArrayState } from "../../Atoms/rectsIdsArrayState";
import { rectAtomFamily } from "../../Atoms/rectAtomFamily";

function Menu() {
	// Input states
	const [widthInput, setWidthInput] = useState(75);
	const [heightInput, setHeightInput] = useState(75);
	const [colorInput, setColorInput] = useState("#769fcd");

	const [counterId, setCounterId] = useState(1);
	const [rectsIdsArray, setRectsIdsArrayState] = useRecoilState(
		rectsIdsArrayState
	);
	const [rectAtom, setRectAtom] = useRecoilState(rectAtomFamily(counterId));

	const submitShape = () => {
		// setRectsArrayState([
		// 	...rectsArray,
		// 	{
		// 		id: counterId,
		// 		name: `rect ${counterId}`,
		// 		width: Number(widthInput),
		// 		height: Number(heightInput),
		// 		color: colorInput
		// 	}
		// ]);
		setRectsIdsArrayState([...rectsIdsArray, counterId]);
		setRectAtom({
			name: `rect ${counterId}`,
			width: Number(widthInput),
			height: Number(heightInput),
			color: colorInput
		});
		setWidthInput(75);
		setHeightInput(75);
		setColorInput("#769fcd");
		setCounterId(counterId + 1);
	};
	return (
		<div className="sidebar__menu">
			<label htmlFor="widthInput">Width:</label>
			<input
				id="widthInput"
				type="number"
				placeholder="50"
				value={widthInput}
				onChange={({ target }) => setWidthInput(target.value)}
				min="0"
			/>
			<label htmlFor="heightInput">Height:</label>
			<input
				id="heightInput"
				type="number"
				placeholder="50"
				value={heightInput}
				onChange={({ target }) => setHeightInput(target.value)}
				min="0"
			/>
			<label htmlFor="colorPicker">Color:</label>
			<input
				type="color"
				id="colorPicker"
				value={colorInput}
				onChange={({ target }) => setColorInput(target.value)}
			/>
			<button onClick={submitShape} id="add-shape">
				Add Shape
			</button>
		</div>
	);
}
export default Menu;
