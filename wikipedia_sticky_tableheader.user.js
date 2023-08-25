// ==UserScript==
// @name        Wikipedia Sticky TableHeader
// @version     1.0
// @author      alrajdev
// @namespace   https://alrajdev.github.io
// @description Make Wikipedia page's Table Header Sticky
// @downloadURL https://github.com/alrajdev/monkeyscripts/raw/master/wikipedia_sticky_tableheader.user.js
// @homepageURL https://github.com/alrajdev/monkeyscripts
// @match       *://*.wikipedia.org/wiki/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.textContent = `
        th {
            position: sticky;
            top: 0;
        }
    `;

    document.head.appendChild(style);
})();
