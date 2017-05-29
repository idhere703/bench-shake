import React from 'react';

function AppView(props) {
  console.log('Props', props);
  if (props.app && props.app.size === 0) {
    return null;
  }
  return (
    <section id="main">
      <ul id="app-list">
        { props.app && [...props.app.values()].reverse().map(contact => (
            <li key={ contact.id }>
              <div className="view">
                <label>
                  { contact.name }
                </label>
              </div>
            </li>
          )) }
      </ul>
    </section>
    );
}

export default AppView;