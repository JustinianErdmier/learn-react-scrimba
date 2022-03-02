/**************************************************************************************************
 * Copyright (c) 2022 Justin Erdmier - All Rights Reserved                                        *
 * Licensed under the MIT License - See LICENSE in repository root.                               *
 **************************************************************************************************/

import React from 'react';
import '../index.css';

export default function Main() {
    return (
        <>
            <main>
                <h1 className='main--title'>Fun facts about React</h1>
                <ul className='main--facts'>
                    <li>Was first released in 2013.</li>
                    <li>Was originally created by Jordan Walke.</li>
                    <li>Has well over 100K stars on GitHub.</li>
                    <li>Is maintained by Facebook.</li>
                    <li>Powers thousands of enterprise apps, including mobile apps.</li>
                </ul>
            </main>
        </>
    );
}
