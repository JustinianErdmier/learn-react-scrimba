/**************************************************************************************************
 * Copyright (c) 2022-2022 Justin Erdmier - All Rights Reserved                                   *
 * Licensed under the MIT License - See LICENSE in repository root.                               *
 **************************************************************************************************/

import {render, screen} from '@testing-library/react';
import App              from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement)
        .toBeInTheDocument();
});
