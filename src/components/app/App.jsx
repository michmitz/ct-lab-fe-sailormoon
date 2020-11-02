import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header/Header'
import SailorDetail from './SailorDetail/SailorDetail'
import SailorList from './SailorList/SailorList'
import Form from './Form/Form' 
import SailorCreator from '../../containers/SailorCreator'


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={SailorList} />
        <Route exact path='/sailors/:id' component={SailorDetail} />
        <Route exact path='/sailorcreator' component={SailorCreator} />
      </Switch>
    </Router>
  );
}

