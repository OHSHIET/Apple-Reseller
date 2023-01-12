'use strict';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let eurodollars = ['$', '€'];

$(document).ready(function () {
    /* bootstrap popovers */
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    $('#submitemail').attr('type', 'submit');
    $('#mail > form').submit(function (event) {
        let email = $('#emailinput').val();
        let popover = bootstrap.Popover.getOrCreateInstance('#submitemail');
        let popoverText = (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) ? ['Thank you', 'Please check your emails.'] : ['Wrong email.', 'Something went wrong. Please check for typos.'];
        popover.setContent({
            '.popover-header': popoverText[0],
            '.popover-body': popoverText[1],
        });
        event.preventDefault();
    })

    let baseElementsArray = Array.from($('body > *:not(script):not(.popover):not(.modal)'));
    let baseElementsIndex = 0;
    let animationInterval = setInterval(function () {
        $(baseElementsArray).eq(baseElementsIndex++).animate({
            opacity: 1
        });
        if (!$(baseElementsArray).eq(baseElementsIndex).length) return clearInterval(animationInterval);
    }, 170)

    $('header nav.navbar form[role="search"]').submit(function (event) {
        let searchBoxVal = $('header nav.navbar form[role="search"] > input[type="search"]').val().replace(' ', '-');
        if (!searchBoxVal) return event.preventDefault();
        window.location.replace(`..${(window.location.href.endsWith('index.html') || window.location.href.endsWith('Apple-Reseller')) ? '/Apple-Reseller' : ''}/search/search.html?query=${searchBoxVal}`);
        event.preventDefault();
    })

});
