// ==UserScript==
// @name        NovelUpdates keyboard navigation
// @version     1.0
// @author      alrajdev
// @namespace   https://alrajdev.github.io
// @description NovelUpdates.com series page navigation with left/right keyboard arrow
// @downloadURL https://github.com/alrajdev/monkeyscripts/raw/master/novelupdates_keyboard_navigation.user.js
// @homeURL     https://github.com/alrajdev/monkeyscripts
// @include     *www.novelupdates.com/series/*
// @grant       none
// ==/UserScript==

document.addEventListener("keyup", keyListener);

function keyListener(event) {
  if(e.code === "ArrowLeft") navigatePrevious();
  else if(e.code === "ArrowRight") navigateNext();
}

function navigatePrevious() {
  const pagination = document.getElementsByClassName('digg_pagination');
  if(pagination.length == 0) return;

  const current = pagination.getElementsByClassName('current');
  const previousPageLink = current.previousElementSibling;
  previousPageLink?.click();
}

function navigateNext() {
  const pagination = document.getElementsByClassName('digg_pagination');
  if(pagination.length == 0) return;

  const current = pagination.getElementsByClassName('current');
  const nextPageLink = current.nextElementSibling;
  nextPageLink?.click();
}
