import React, { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(props) {
	const favoritesCtx = useContext(FavoritesContext);
	const favoriteMeetups = favoritesCtx.favorites;

  // jsx to return
	if (favoriteMeetups.length === 0) 
    return <p>You have no favorites.</p>;
	else
		return (
			<>
				<h1>My Favorites</h1>
				<MeetupList list={favoriteMeetups} />
			</>
		);
}

export default FavoritesPage;
