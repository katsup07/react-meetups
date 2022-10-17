import { createContext, useState } from 'react';

const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
  // listing the below functions is good for autocompletion
  addFavorite: (newFavoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
	const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(newFavoriteMeetup){
    setUserFavorites(prevFavorites => [...prevFavorites, newFavoriteMeetup]);
  }

  function removeFavoriteHandler(meetupId){
    console.log(userFavorites);
    setUserFavorites( prevFavorites => prevFavorites.filter( meetup => meetup.id !== meetupId))
  }

  function itemIsFavoriteHandler(meetupId){
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

	const context = {
		favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
	};
	return (
		<FavoritesContext.Provider value={context}>
			{props.children}
		</FavoritesContext.Provider>
	);
}

export default FavoritesContext;
