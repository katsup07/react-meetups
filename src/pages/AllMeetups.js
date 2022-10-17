import React, { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import classes from './AllMeetups.module.css';

function AllMeetupsPage(props) {

  const endpoint = 'https://react-meetups-e643b-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json';

  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

	useEffect(() => {
    setIsLoading(true);
    setHasError(false);
		fetch(endpoint)
    .then((res) => res.json()
      .then((data) => {
        const meetupsData = [];

        for( const key in data){
          const meetup = {
            ...data[key],
            id: key,
          };
          meetupsData.push(meetup);
        }
      //  setMeetups(Object.values(data));
      setMeetups(meetupsData);
        console.log('use effect sucess data:', data);
        setIsLoading(false);
      })
        .catch(error => {
          console.log(error);
          setHasError(true);
        })
	    )},
  []);

  console.log(meetups, isLoading, hasError);
	return (
		<section>
     { (isLoading && !hasError) && <p>Loading data from server...</p>}

     { hasError && <p>Something went wrong... try again shortly</p>}

			{!isLoading && <div><h2 className={classes.h2}>
          <span>All Meetups</span>
        </h2>
        <MeetupList list={meetups} />
      </div>}
		</section>
	);
}

export default AllMeetupsPage;
