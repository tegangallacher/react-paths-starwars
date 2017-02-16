import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import PeopleContainer from './container/PeopleContainer.jsx';
import Home from './components/Home.jsx';
import StarshipsContainer from './container/StarshipsContainer.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="people" component={PeopleContainer}/>
        <Route path="starships" component={StarshipsContainer}/>
      </Route>
    </Router>,
    document.getElementById('app')
  );
}