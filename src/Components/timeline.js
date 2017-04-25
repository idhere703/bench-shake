import React from 'react';
import Event from './event';


const Timeline = ({timeline}) => {

  return (<div>
            <div className="main__timeline">
              <h1 className="main__timeline-header">{ timeline.title }</h1>
              <p className="main__timeline-paragraph">
                { timeline.headerContent }
              </p>
            </div>
            <div className="timeline">
              { timeline.events.map(event => {
                  return (<Event event={ event }></Event>);
                }) }
            </div>
          </div>);

};

export default Timeline;