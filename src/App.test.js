/**************************************************************************************************
 * Copyright (c) 2022-2022 Justin Erdmier - All Rights Reserved                                   *
 * Licensed under the MIT License - See LICENSE in repository root.                               *
 * App.test.js  created by  jerdmier                                                              *
 * Last modified: 3/1/22, 2:39 PM  by  jerdmier                                                   *
 **************************************************************************************************/

import {render, screen} from '@testing-library/react';
import App              from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement)
        .toBeInTheDocument();
});
