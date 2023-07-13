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
    let post_id_and_auth = flag_link.split('?')[1]
    post_id_and_auth = post_id_and_auth.replace('&goto=news', '')
    subline.innerHTML = subline.innerHTML + '|' + ` <a href="fave?${post_id_and_auth}">favorite</a>`
  })
})()
