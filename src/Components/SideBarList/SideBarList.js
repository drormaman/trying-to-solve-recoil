import React from "react";
import SideBarItem from "../SideBarItem/SideBarItem";
import "./sideList.css";
// DO NOT TOUCH THAT
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
import { sideBarListRenderMeterState } from "../../ChallengeUtils/renderMeter";
// ---------------------
import { rectsIdsArrayState } from "../../Atoms/rectsIdsArrayState";
import { useRecoilValue } from "recoil";

function SideBarList() {
	const rectsIdsArray = useRecoilValue(rectsIdsArrayState);
	// function editRect(id, prop, value) {
	// 	setRectsArrayState(
	// 		rectsArray.map(rect => {
	// 			if (rect.id === id) {
	// 				return {
	// 					...rect,
	// 					[prop]: value
	// 				};
	// 			}
	// 			return rect;
	// 		})
	// 	);
	// }

	//DO NOT TOUCH THAT
	useRenderMeter(sideBarListRenderMeterState);
	// ----------------
	return (
		<ul className="sidebar__list">
			{rectsIdsArray.map(id => {
				return <SideBarItem key={id} rectId={id} />;
			})}
		</ul>
	);
}

export default SideBarList;
