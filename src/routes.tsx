import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Favourites from './pages/Favourites';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favourites" component={Favourites} />
    </Switch>
  );
};

export default Routes;