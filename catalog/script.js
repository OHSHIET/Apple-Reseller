'use strict';

$(document).ready(function(){
    $('.product-price').html(() => eurodollars[getRandomInt(0, eurodollars.length)] + getRandomInt(0, 9999));
})