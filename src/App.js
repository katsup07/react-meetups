import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import NotFound from './pages/NotFound';

function App() {
   // http://localhost:3000/
	return <Layout>
    <Switch>
      <Route exact path='/'><AllMeetupsPage/></Route>
      <Route path='/new-meetup'><NewMeetupPage/></Route>
      <Route path='/favorites'><FavoritesPage/></Route>
      <Route path='/:id'><NotFound/></Route>
    </Switch>
  </Layout>;
}

export default App;
