import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// We will remove these lines later:

import AppActions from './data/AppActions';

AppActions.addContact({
  email: 'testingappB@mailinator.com',
  name: 'Regular Person',
  phone: '843-867-3090'
});
AppActions.addContact({
  email: 'testingappB@mailinator.com',
  name: 'Regular Person',
  phone: '000-000-0000'
});
AppActions.addContact({
  email: 'testingappB@mailinator.com',
  name: 'Regular Person',
  phone: '843-123-3210'
});
