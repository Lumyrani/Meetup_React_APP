import logo from './logo.svg';
import './App.css';
import { Favorites } from './pages/Favorites';
import { AllMeetups } from './pages/AllMeetups';
import { NewMeetup } from './pages/NewMeetup';
import { Route, Switch } from 'react-router-dom'
import { MainNavigation } from './components/layout/MainNavigation';

import { useState } from 'react';
import { data } from './pages/data'
import { Layout } from './components/layout/Layout';


function App() {

  return (
    <div className="App">
      {/* <MainNavigation/> */}
      <Layout>


        <Switch>
          <Route path='/favorites'> <Favorites /></Route>
          <Route path="/" exact><AllMeetups /></Route>
          <Route path='/new-meetup'><NewMeetup /> </Route>


        </Switch>
      </Layout>
    </div>
  );
}

export default App;
