import React from "react";
import "./canvas.css";
import Recatangle from "../Rectangle/Rectangle";
// DO NOT TOUCH THAT
import { canvasRenderMeterState } from "../../ChallengeUtils/renderMeter.js";
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
import { useRecoilValue } from "recoil";
import { canvasBackgroundColorState } from "../../Atoms/canvasBackgroundColorState";
import { rectsIdsArrayState } from "../../Atoms/rectsIdsArrayState";

function Canvas(props) {
	// TOUCH THAT IF YOU WANT TO GET KILLED
	useRenderMeter(canvasRenderMeterState);
	// ---------------------------------------------
	const rectsIdsArray = useRecoilValue(rectsIdsArrayState);

	const backgroundColor = useRecoilValue(canvasBackgroundColorState);
	return (
		<div
			className="canvas"
			id="canvas"
			style={{ backgroundColor: backgroundColor }}>
			{rectsIdsArray.map(id => {
				return <Recatangle key={id} rectId={id} />;
			})}
		</div>
	);
}

export default Canvas;
