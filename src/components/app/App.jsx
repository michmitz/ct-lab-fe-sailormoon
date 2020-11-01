import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SailorDetail from './SailorDetail/SailorDetail'
import SailorList from './SailorList/SailorList' 


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SailorList} />
        <Route exact path='/sailors/:id' component={SailorDetail} />
      </Switch>
    </Router>
  );
}

