import React from 'react';

function AppView(props) {
    console.log('Props', props);
    if (props.contacts && props.contacts.size === 0) {
        return null;
    }
    return (
        <section id="main">
          <ul id="contacts-list">
            { props.contacts && [...props.contacts.values()].reverse().map(contact => (
                  <li key={ contact.id }>
                    <div className="view">
                      <label>
                        { contact.name }
                      </label>
                      <button className="destroy" onClick={ () => {
                                                            } } />
                    </div>
                  </li>
              )) }
          </ul>
        </section>
        );
}

export default AppView;