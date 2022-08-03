import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Styling Import
import "./Styling/Reset.css"
import "./Styling/Styles.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
