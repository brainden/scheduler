// import React from "react";
// import "components/InterviewerListItem.scss";
// import classname from "classnames";

// export default function InterviewListItem({
// 	id,
// 	name,
// 	avatar,
// 	selected,
// 	setInterviewer = () => {}
// }) {
// 	const interviewListClass = classname("interviewers__item", {
// 		"interviewers__item--selected": selected
// 	});

// 	return (
// 		<li
// 			className={interviewListClass}
// 			onClick={() => setInterviewer("setInterviewer")}
// 		>
//
// 			<img className="interviewers__item-image" src={avatar} alt={name} />
// 			    {selected ? name : ""}
// 		</li>
// 	);
// }

// import React from "react";

// import InterviewerListItem from "components/InterviewerListItem";

// import "components/InterviewerList.scss";

// export default function InterviewerList(props) {
//   const interviewerList = props.interviewers.map(interviewer =>
//     <InterviewerListItem
//       name={interviewer.name}
//       avatar={interviewer.avatar}
//       selected={interviewer.id === props.value}
//       setInterviewer={event => props.onChange(interviewer.id)}
//     />
//   )

//   return (
//     <section class="interviewers">
//       <h4 class="interviewers__header text--light">{props.name}</h4>
//       <ul class="interviewers__list">{interviewerList}</ul>
//     </section>
//   )
// }

import React from "react";
import cs from "classnames";
import "./InterviewerListItem.scss";

const InterviewerListItem = ({ selected, name, avatar, setInterviewer }) => {
	const classes = cs("interviewers__item", {
		"interviewers__item--selected": selected
	});

	return (
		<li className={classes} onClick={setInterviewer}>
			<img className="interviewers__item-image" src={avatar} alt={name} />
			{selected ? name : ""}
		</li>
	);
};
export default InterviewerListItem;
