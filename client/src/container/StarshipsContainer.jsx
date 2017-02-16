import React from 'react';
const Starships = require('../components/Starships');

const StarshipsContainer = React.createClass({
  getInitialState: function () {
    return { starships: []}
  },
  componentDidMount: function() {
    const url = 'http://swapi.co/api/starships/?format=json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if(request.status === 200) {
        const data = JSON.parse(request.responseText);
        this.setState({starships: data.results})
      }
    }
    request.send();
  },
  render: function() {
    return(
      <div>
      <Starships starships={this.state.starships}/>
      </div>
      );
  }
});

module.exports = StarshipsContainer;