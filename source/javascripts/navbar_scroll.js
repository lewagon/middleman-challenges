// Navbar transition on scroll

$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 300) {
      $(".navbar-wagon").css({
        "margin-top": "-70px"
      });
    }
    else {
      $(".navbar-wagon").css({
        "margin-top": "0",
      });
    }
  });
});