import React from 'react';
import Person from './person';

const People = React.createClass({
  render: function () {
    console.log(this.props.people)
    const peopleNodes = this.props.people.map(function (people, index) {
      return ( 
          <Person 
          name={ people.name }
          key={index}/>
        )
    })

    return (
      <div className="people">
        <h1>Characters</h1>
          {peopleNodes}
      </div>
      )
  }
});

module.exports = People;
