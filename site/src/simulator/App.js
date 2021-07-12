import * as React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { getRoutes } from './utils';
import DemoHome from './pages/DemoHome';

const routes = getRoutes();

const App = () => {
  return (
   <Router>
     <Switch>
       <Route path="/zh" component={DemoHome} exact />
       {
        routes.map(item => <Route path={item.path} component={item.component} key={name} />)
      }
      <Redirect path="*" to="/zh" />
     </Switch>
   </Router>
  );
}

export default App;
