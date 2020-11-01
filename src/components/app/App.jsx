import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header/Header'
import SailorDetail from './SailorDetail/SailorDetail'
import SailorList from './SailorList/SailorList' 


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={SailorList} />
        <Route exact path='/sailors/:id' component={SailorDetail} />
      </Switch>
    </Router>
  );
}

