import React, { Component } from 'react';
import './App.css';
import Timeline from './Components/timeline';

const events = {
  title: 'Timeline!',
  headerContent: (`We are so awesome. Look at this timeline`),
  events: [{
    year: 1900,
    title: 'What a year',
    content: 'Nothing much going on. I think they are inventing Coke Zero.'
  }]
};


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Timeline timeline={ events }></Timeline>
          </div>
        </div>
      </div>
      );
  }
}

export default App;
