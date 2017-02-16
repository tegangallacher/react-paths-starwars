import React from 'react';
import People from './People.jsx';
import Home from './Home.jsx';
import Starships from './Starships.jsx';

import {Link} from 'react-router';

class Main extends React.Component {
  render(){
    return (
      <div>
        <h4>I know nothing about Star Wars</h4>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/people">Characters</Link>
            </li>
            <li>
              <Link to="/starships">Starships</Link>
            </li>
          </ul>
          {this.props.children}
      </div>)
  }
}

export default Main;