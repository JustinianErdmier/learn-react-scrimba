/**************************************************************************************************
 * Copyright (c) 2022-2022 Justin Erdmier - All Rights Reserved                                   *
 * Licensed under the MIT License - See LICENSE in repository root.                               *
 * App.js  created by  jerdmier                                                                   *
 * Last modified: 3/1/22, 2:38 PM  by  jerdmier                                                   *
 **************************************************************************************************/

import './App.css';
import logo from './logo.svg';

function App() {
    return (
        <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
    );
}

export default App;
