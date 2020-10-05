import React from "react";
import "./sideBarItem.css";
import { useRecoilState } from "recoil";
import { rectAtomFamily } from "../../Atoms/rectAtomFamily";

function SideBarItem({ rectId }) {
	const [rectAtom, setRectAtom] = useRecoilState(rectAtomFamily(rectId));

	return (
		<li className="sidebar__row">
			<span className="sidebarItemName">{rectAtom.name}</span>
			<input
				id="shapeWidthInput"
				type="number"
				placeholder="width"
				min="0"
				value={rectAtom.width}
				onChange={({ target }) =>
					setRectAtom({ ...rectAtom, width: Number(target.value) })
				}
			/>
			<input
				id="shapeHeightInput"
				type="number"
				placeholder="height"
				min="0"
				value={rectAtom.height}
				onChange={({ target }) =>
					setRectAtom({ ...rectAtom, height: Number(target.value) })
				}
			/>
			<input
				type="color"
				id="colorModifier"
				value={rectAtom.color}
				onChange={({ target }) =>
					setRectAtom({ ...rectAtom, color: target.value })
				}
			/>
		</li>
	);
}

export default SideBarItem;
