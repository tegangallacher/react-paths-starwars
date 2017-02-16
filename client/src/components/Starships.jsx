import React from 'react';
import Starship from './starship';

const Starships = React.createClass({
  render: function () {
    console.log(this.props.starships)
    const starshipsNodes = this.props.starships.map(function (starships, index) {
      return ( 
          <Starship 
          name={ starships.name }
          key={index}/>
        )
    })

    return (
      <div className="starships">
        <h1>Starships</h1>
          {starshipsNodes}
      </div>
      )
  }
});

module.exports = Starships;