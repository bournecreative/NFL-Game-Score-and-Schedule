$(document).ready(navScroll);

function navScroll() {
  
  var amount = '';
  
  function scroll() {
    $('.week').animate({
      scrollLeft: amount
    }, 100, 'linear', function () {
      if (amount != '') {
        scroll();
      }
    });
  }
  //scroll left
  $('.hover-left').hover(function () {
    amount = '-=10';
    scroll();
  }, function () {
    amount = '';
  });
  
  //scroll right
  $('.hover-right').hover(function () {
    amount = '+=10';
    scroll();
  }, function () {
    amount = '';
  });
}