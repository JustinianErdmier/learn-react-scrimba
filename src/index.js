/**************************************************************************************************
 * Copyright (c) 2022-2022 Justin Erdmier - All Rights Reserved                                   *
 * Licensed under the MIT License - See LICENSE in repository root.                               *
 * index.js  created by  jerdmier                                                                 *
 * Last modified: 3/1/22, 2:40 PM  by  jerdmier                                                   *
 **************************************************************************************************/

import React           from 'react';
import ReactDOM        from 'react-dom';
import App             from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
