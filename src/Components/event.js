import React from 'react';

const Event = ({event}) => {
    return (
        <div className="column">
          <div className="title">
            <h1> { event.year } </h1>
            <h2> { event.title } </h2>
          </div>
          <div className="description">
            <p>
              { event.content }
            </p>
          </div>
        </div>
        );
};

export default Event;