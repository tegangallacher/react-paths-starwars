import React from 'react';
const People = require('../components/People');

const PeopleContainer = React.createClass({
  getInitialState: function () {
    return { people: []}
  },
  componentDidMount: function() {
    const url = 'http://swapi.co/api/people/?format=json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if(request.status === 200) {
        const data = JSON.parse(request.responseText);
        this.setState({people: data.results})
      }
    }
    request.send();
  },
  render: function() {
    return(
      <div>
      <People people={this.state.people}/>
      </div>
      );
  }
});

module.exports = PeopleContainer;