/**************************************************************************************************
 * Copyright (c) 2022-2022 Justin Erdmier - All Rights Reserved                                   *
 * Licensed under the MIT License - See LICENSE in repository root.                               *
 * reportWebVitals.js  created by  jerdmier                                                       *
 * Last modified: 3/1/22, 2:38 PM  by  jerdmier                                                   *
 **************************************************************************************************/

const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
