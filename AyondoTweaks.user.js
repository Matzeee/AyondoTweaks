// ==UserScript==
// @name        Ayondo Tweaks
// @namespace   https://github.com/Matzeee
// @include     https://wetrade.ayondo.com/follower/*
// @version     1.1
// @grant       none
// @run-at      document-idle
// @license     The Unlicense
// @homepageURL	https://github.com/Matzeee/AyondoTweaks/
// ==/UserScript==


function updateTraderTitle() {
    var link = window.location.pathname.split("/");
    // Contains Traders Name
    document.title = link[link.length - 1];
}


function portfolioLinks() {
    var counter = document.querySelector('div.provider-container:nth-child(5) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)');
    if (counter) {
        for (i = 1; i <= 5; i++) {
            var traderName = document.querySelector('div.provider-container:nth-child(' + i + ') > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)');
            //traderName.href = '/follower/traderprofile/' + traderName.innerHTML;
            var traderPicDiv = document.querySelector('div.provider-container:nth-child(' + i + ') > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)');
            var traderPicImg = document.querySelector('div.provider-container:nth-child(' + i + ') > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > img:nth-child(1)');            
            var a = document.createElement("A");
            a.href = '/follower/traderprofile/' + traderName.innerHTML;
            a.target = '_blank';
            traderPicDiv.insertBefore(a, traderPicImg);
            a.appendChild(traderPicImg);
            
        }
    } else {
        setTimeout(portfolioLinks, 200);
    }
}


function checkPage() {
    var title = document.title;
    if (title == 'TraderProfile') {
        updateTraderTitle();
    } else if (title == 'Portfolio Editor') {
        portfolioLinks();
    }
}
checkPage();
