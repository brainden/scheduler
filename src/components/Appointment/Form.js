import React, { useState } from "react";
import Button from "../Button";
import InterviewerList from "../InterviewerList";

export default function Form(props) {
	const [name, setName] = useState(props.name || "");
	const [interviewer, setInterviewer] = useState(props.interviewer || null);
	const [error, setError] = useState("");
	function reset() {
		setName("");
		setInterviewer(null);
		props.onCancel();
	}

	function verify() {
		if (name === "") {
			setError("Students name cannot be blank");
			return;
		}
		setError("");
		props.onSave(name, interviewer);
	}

	return (
		<main className="appointment__card appointment__card--create">
			<section className="appointment__card-left">
				<form autoComplete="off" onSubmit={event => event.preventDefault()}>
					<input
						className="appointment__create-input text--semi-bold"
						name="name"
						type="text"
						value={name}
						placeholder="Enter Student Name"
						onChange={event => setName(event.target.value)}
					/>
				</form>
				<InterviewerList
					interviewers={props.interviewers}
					value={interviewer}
					onChange={setInterviewer}
				/>
			</section>
			<section className="appointment__card-right">
				<section className="appointment__actions">
					<Button danger onClick={reset}>
						Cancel
					</Button>
					<Button confirm onClick={verify}>
						Save
					</Button>
				</section>
			</section>
		</main>
	);
}
