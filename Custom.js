// Initialize AOS
AOS.init();


//scroll to top
$("#top-button").click(
  function(){
      $("html, body").animate({scrollTop: 0}, 1000);
  }
);