import React from 'react';
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage(props) {
	const history = useHistory();

	function addMeetupHandler(meetupData) {
		fetch(
			'https://react-meetups-e643b-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then((result) => {
      history.replace('/');
			console.log(result);
		});
	}

	return (
		<section className='route'>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
}

export default NewMeetupPage;
