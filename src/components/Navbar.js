/**************************************************************************************************
 * Copyright (c) 2022 Justin Erdmier - All Rights Reserved                                        *
 * Licensed under the MIT License - See LICENSE in repository root.                               *
 **************************************************************************************************/

import React     from 'react';
import reactIcon from '../images/react-icon.png';
import '../index.css';

export default function Navbar() {
    return (
        <>
            <nav>
                <img src={reactIcon} alt='React Logo' className='nav--icon' />
                <h3 className='nav--logo_text'>React Facts</h3>
                <h4 className='nav--title'>React Course - Project 1</h4>
            </nav>
        </>
    );
}
