import React, {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem({ data }) {

	const { id, title, image, address, description } = data;
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  function toggleFavoriteStatusHandler(){
    if(itemIsFavorite) {
      console.log('Removing a favorite...');
      favoritesCtx.removeFavorite(id);
    }
    else{
      console.log('Adding a new favorite...');
      favoritesCtx.addFavorite({...data});
      console.log(favoritesCtx.favorites);
    }
  }

	return (
		<li key={id}>
			<Card>
				<div>
					<h3 className={classes.title}>{title}</h3>
					<img src={image} alt={title} width='300px' />
					<address className={classes.address}>Location: {address}</address>
				</div>
				<div className={classes.description}>
					<p>{description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoriteStatusHandler}>{ itemIsFavorite ? 'Remove Favorite' : 'Favorite'}</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
