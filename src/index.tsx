import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss'

const App = () => (
  <h1>
    React-game! {' '}
    {new Date().toLocaleDateString()}
  </h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
