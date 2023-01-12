'use strict';

function catAjax() {
    $.ajax({
        type: "GET",
        url: "https://catfact.ninja/fact",
        dataType: "json",
        success: function (result) {
            $('#cat-fact').text(result.fact);
        },
        error: function () {
            $('#cat-fact').text('Something went wrong.');
        }
    })
}

$(document).ready(function () {
    catAjax();
    $('#generate-fact').click(function () {
        catAjax();
    })
})