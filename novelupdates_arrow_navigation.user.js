// ==UserScript==
// @name        NovelUpdates Arrow navigation
// @version     1
// @namespace   alrajdev
// @description NovelUpdates.com Series page navigation with left/right arrow
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
