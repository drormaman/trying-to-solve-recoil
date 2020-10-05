import React from "react";
import "./rectangle.css";
import { useRecoilValue } from "recoil";
import { rectAtomFamily } from "../../Atoms/rectAtomFamily";

function Rectangle({ rectId }) {
	const rectAtom = useRecoilValue(rectAtomFamily(rectId));

	return (
		<div
			className="rect"
			style={{
				backgroundColor: rectAtom.color,
				width: rectAtom.width,
				height: rectAtom.height
			}}>
			{rectAtom.name}
		</div>
	);
}

export default Rectangle;
