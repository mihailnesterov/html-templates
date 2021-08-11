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

/*scroll to anchor */
$(document).ready(function() {
	$("a.scrolling-links").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top-50;
		$('html,body').animate( { scrollTop: destination }, 1100 );
		return false;
	});
});
