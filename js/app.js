$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 150) {
        $("header").addClass("active");
    } else {
        $("header").removeClass("active");
    }

});


$(document).ready(function(){ 
      
    $(window).scroll(function(){
      if ($(this).scrollTop() > 2000) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    }); 
    
    $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1200);
      return false;
    });

  });

