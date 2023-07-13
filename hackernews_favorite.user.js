// ==UserScript==
// @name        Hackernews favorite button
// @version     1.0
// @author      alrajdev
// @namespace   https://alrajdev.github.io
// @description Show favourite button under every post
// @downloadURL https://github.com/alrajdev/monkeyscripts
// @match       *://news.ycombinator.com/
// @match       *://news.ycombinator.com/news
// @match       *://news.ycombinator.com/newest
// @match       *://news.ycombinator.com/front
// @match       *://news.ycombinator.com/ask
// @match       *://news.ycombinator.com/show
// @grant       none
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
