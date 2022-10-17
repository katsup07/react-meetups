import React, { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm({onAddMeetup}) {
	const titleRef = useRef();
	const imageRef = useRef();
	const addressRef = useRef();
	const descriptionRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('handling form submission...');

		const enteredMeetupData = {
			id: Math.random(),
			title: titleRef.current.value,
			image: imageRef.current.value,
			address: addressRef.current.value,
			description: descriptionRef.current.value,
		};

    onAddMeetup(enteredMeetupData);
    
	};
	return (
		<Card>
			<form className={classes.form} action='submit' onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>Meetup Title</label>
					<input id='title' type='text' ref={titleRef} required />
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>Meetup Image Link</label>
					<input id='image' type='url' ref={imageRef} required />
				</div>
				<div className={classes.control}>
					<label htmlFor='address'>Address</label>
					<input id='address' type='text' ref={addressRef} required />
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>Description</label>
					<textarea
						id='description'
						type='text'
						rows='3'
						ref={descriptionRef}
						required
					/>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
