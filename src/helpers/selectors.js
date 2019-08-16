// export const getAppointmentsForDay = (state, day) => {
// 	const appointmentsId = state.days
// 		.filter(e => e.name === day)
// 		.map(e => e.appointments)
// 		.reduce((acc, val) => acc.concat(val), []);

// 	const appointment = [];
// 	appointmentsId.forEach(e => {
// 		appointment.push(state.appointments[e]);
// 	});

// 	return appointment;
// };

// // Returns the interviewrs for a given day (ex: Monday)
// export const getInterviewersForDay = (state, day) => {
// 	const interviewersId = state.days
// 		.filter(e => e.name === day)
// 		.map(e => e.interviewers)
// 		.reduce((acc, val) => acc.concat(val), []);

// 	const interviewers = [];

// 	interviewersId.forEach(e => {
// 		interviewers.push(state.interviewers[e]);
// 	});

// 	return interviewers;
// };

// // Returns an object like: {student, interviewer}
// export const getInterview = (state, interview) => {
// 	if (!interview) {
// 		return null;
// 	} else {
// 		const student = interview.student;
// 		const interviewer = state.interviewers[interview.interviewer];
// 		const interviewObj = { student, interviewer };
// 		return interviewObj;
// 	}
// };

// // Returns the number of spots left (!! MAX is hardcoded !!)
export const getSpotsForDay = (appointments, days, day) => {
	const MAX_SPOTS = 5;
	const targetDay = days.find(e => e.name === day);
	const appointmentList = [...targetDay.appointments];
	const appointmentsSpread = { ...appointments };

	const filledSpots = Object.values(appointmentsSpread).reduce(
		(total, appointment) => {
			if (appointmentList.includes(appointment.id)) {
				if (appointment.interview) {
					return total + 1;
				}
			}
			return total;
		},
		0
	);

	return MAX_SPOTS - filledSpots;
};
export const getDay = (state, day) =>
	state.days.filter(d => d.name.toLowerCase() === day)[0];

export const getAppointmentsForDay = (state, day) => {
	const foundDay = getDay(state, day);

	if (!foundDay) {
		return [];
	}

	return foundDay.appointments.map(id => state.appointments[id]);
};

export const getInterviewersForDay = (state, day) => {
	const foundDay = getDay(state, day);

	if (!foundDay) {
		return [];
	}

	return foundDay.interviewers.map(id => state.interviewers[id]);
};

export const getInterview = (state, interview) => {
	if (!interview) return null;
	const interviewer = state.interviewers[interview.interviewer];

	return {
		...interview,
		interviewer
	};
};
