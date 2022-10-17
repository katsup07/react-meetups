import React, {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {

  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.title}>React Meetups</div>
      <nav>
          <li><Link to='/'><span>All Meetups</span></Link></li>
          <li><Link to='/new-meetup'>Add New Meetup</Link></li>
          <li><Link to='/favorites'>My Favorites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link></li>
      </nav>
        
    </header>
  );
}

export default MainNavigation;