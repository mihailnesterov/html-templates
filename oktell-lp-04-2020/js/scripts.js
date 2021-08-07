/* Custom JavaScript */

   
/* toTop Button */
$(function() { 
    $(window).scroll(function() { 
    if($(this).scrollTop() != 0) { 
        $('#toTop').fadeIn(); 
            } else {	 
                    $('#toTop').fadeOut(); 
            }	 
        }); 
        $('#toTop').click(function() { 
        $('body,html').animate({scrollTop:0},800); 
    });
});

/* Active menu */
$('.navbar-nav .nav-link').on('click', function() {
    $('.navbar-nav .nav-link').each(function() {
        $(this).removeClass('active');
    });
    $(this).addClass('active');
});

/*scroll to anchor */
$(document).ready(function() {
    $("a.scrolling-links").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top-80;
      $('html,body').animate( { scrollTop: destination }, 1100 );
      return false;
    });
});

$(function() {
    /**
     * wow.js init
     */
    
        const wow = new WOW(
            {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
          }
          )
          wow.init();
    });