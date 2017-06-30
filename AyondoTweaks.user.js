// ==UserScript==
// @name        AyondoTweaks
// @namespace   https://github.com/Matzeee
// @include     https://wetrade.ayondo.com/follower/*
// @version     1
// @grant       none
// @run-at      document-idle
// @license     The Unlicense
// @homepage	https://github.com/Matzeee/AyondoTweaks/
// ==/UserScript==


function updateTraderTitle() {
    var link = window.location.pathname.split("/");
    // Contains Traders Name
    document.title = link[link.length - 1];
}


function portfolioLinks() {
    var counter = document.querySelector('div.provider-container:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)');
    if (counter) {
        for (i = 1; i <= 5; i++) {
            var trader = document.querySelector('div.provider-container:nth-child(' + i + ') > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)');
            trader.href = 'https://wetrade.ayondo.com/follower/traderprofile/' + trader.innerHTML;
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
