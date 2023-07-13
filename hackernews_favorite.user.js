// ==UserScript==
// @name        Show favourite button under every post
// @namespace   Violentmonkey Scripts
// @match       https://news.ycombinator.com/news
// @grant       none
// @version     1.0
// @author      alrajkabeer
// @description 13/07/2023, 12:42:14
// ==/UserScript==

(function() {
  // find every post's subline
  let sublines = document.querySelectorAll('.subtext > .subline')
  sublines.forEach((subline)=>{
    let flag_link = subline.childNodes[9].href
    let queries = flag_link.split('?')[1].split('&').filter((query)=> query.startsWith("id=") || query.startsWith("auth="))
    subline.innerHTML = subline.innerHTML + '|' + ` <a href="fave?${queries.join('&')}">favorite</a>`
  })
})()
