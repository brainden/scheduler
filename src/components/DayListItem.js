import React from "react";

import "components/DayListItem.scss";

export default function DayListItem(props) {
	return (
		<div class="day-list">
			<h1>{props.name}</h1>
			{props.spots === 0 ? "no" : props.spots} spot
			{props.spots === 1 ? "" : "s"} remaining
		</div>
	);
}
