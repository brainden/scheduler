// import React from "react";

// import "components/InterviewerList.scss";
// import InterviewerListItem from "./InterviewerListItem";

// export default function InterviewList({
// 	interviewers,
// 	interviewer,
// 	setInterviewer
// }) {
// 	return (
// 		<section className="interviewers">
// 			<h4 className="interviewers__header text--light">Interviewer</h4>
// 			<ul className="interviewers__list">
//
// 				{interviewers.map(i => (
// 					<InterviewerListItem
// 						id={i.id}
// 						name={i.name}
// 						avatar={i.avatar}
// 						selected={i.id === interviewer}
// 						setInterviewer={setInterviewer}
// 						key={i.id}
// 					/>
// 				))}
//
// 			</ul>
// 		</section>
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
import InterviewerListItem from "./InterviewerListItem";

import "./InterviewerList.scss";

const InterviewerList = ({ interviewers, onChange, value }) => {
	return (
		<section className="interviewers">
			<h4 className="interviewers__header text--light">Interviewer</h4>
			<ul className="interviewers__list">
				{interviewers.map(i => (
					<InterviewerListItem
						key={i.id}
						{...i}
						selected={i.id === value}
						setInterviewer={() => onChange(i.id)}
					/>
				))}
			</ul>
		</section>
	);
};
export default InterviewerList;
