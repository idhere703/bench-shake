import React, { Component } from 'react';
import './App.scss';
import Timeline from './Components/timeline';

const events = {
  title: 'Timeline!',
  headerContent: (`Look at this timeline. Would you just look at it.`),
  events: [{
    year: 1900,
    title: 'What a year',
    content: 'Nothing much going on. I think they are inventing Coke Zero.'
  }, {
    year: 1901,
    title: 'Nothing much else going on.',
    content: 'It is a new day.'
  }, {
    year: 1902,
    title: 'I liked last year better.',
    content: 'Less going on.'
  }, {
    year: 1903,
    title: 'I\'m so old!',
    content: 'My life is over.'
  }, {
    year: 1904,
    title: 'I am going to get a new car! Have those been invented yet?',
    content: 'Eh, new horse then.'
  }, {
    year: 1905,
    title: 'I just needed more events to display on the timeline.',
    content: 'And now I have them.'
  }]
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Timeline timeline={ events }></Timeline>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default App;
