'use strict';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let slidesAvailable = {
  iphone: 3,
  ipad: 4,
  macbook: 2,
}

const myModal = document.getElementById('buyproduct-modal');
const myInput = document.getElementById('buy');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

$(document).ready(function () {

  $('.product-price').html(() => eurodollars[getRandomInt(0, eurodollars.length)] + getRandomInt(0, 9999));

  let productType = $('title').text().substring(0, $('title').text().indexOf(' ')).toLowerCase();
  let numArray = new Array(slidesAvailable[productType]).fill(1).map((element, index) => element + index);
  for (let i = 0; i < slidesAvailable[productType]; i++) {
    let removedElement = getRandomInt(0, numArray.length);
    $('.swiper-slide img').eq(i + 1).attr('src', `../img/${productType}-catalog${numArray[removedElement]}.jpg`);
    numArray.splice(removedElement, 1);
  }

  $('#process-payment').click(function () {
    console.log(Array.from($('form > *')))
    if (!$('#deliver-to').val()) (!$('.popover').length) ? $('#deliver-to').popover('show') : null;
    else $('#deliver-to').popover('hide');
    if (!$('fieldset#card-data').attr('disabled') && !/^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test($('#cc-number').val())) (!$('.popover').length) ? $('#cc-number').popover('show') : null;
    else $('#cc-number').popover('hide');
    if (!$('fieldset#card-data').attr('disabled') && !/^[A-Z]{3,10}\s[A-Z]{4,13}$/.test($('#name-surname').val())) (!$('.popover').length) ? $('#name-surname').popover('show') : null;
    else $('#name-surname').popover('hide');
    if (!$('fieldset#card-data').attr('disabled') && !/^(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(\/|-|\.)(?:0?[13578]|1[02])\1(?:31))|(?:(\/|-|\.)(?:0?[13-9]|1[0-2])\2(?:29|30)))$|^(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/|-|\.)0?2\3(?:29)$|^(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:0?[1-9]|1\d|2[0-8])$/.test($('#expirationdate').val())) (!$('.popover').length) ? $('#expirationdate').popover('show') : null;
    else if (new Date($('#expirationdate').val()).getTime() < Date.now()) (!$('.popover').length) ? $('#expirationdate').popover('show') : null;
    else $('#expirationdate').popover('hide');
    if (!$('fieldset#card-data').attr('disabled') && !/^\d{3}$/.test($('#cvc').val())) (!$('.popover').length) ? $('#cvc').popover('show') : null;
    else {
      $('#cvc').popover('hide');
      return $('#purchase-complete').css('display', 'inherit');
    }
  });

  $('#by-cash').change(function () {
    $('fieldset#card-data').prop('disabled', this.checked);
    $('fieldset#card-data input').val('');
  });

  $('.closeModal').click(function () {
    $('#cc-information input').val(' ');
    $('#purchase-complete').css('display', 'none');
    $("#by-cash").prop('checked', false);
    $('fieldset#card-data').prop('disabled', false);
  })
});