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

/* active-menu */
function ActiveLinks(id){
	try{
		var el=document.getElementById(id).getElementsByTagName('a');
			var url=document.location.href;
			for(var i=0;i<el.length; i++){
			if (url==el[i].href){
			el[i].className = 'active_menu';
			};
		};
	}
	catch(e){}
};
		
/* bxSlider slider */
$(document).ready(function() {
	$('.bxslider').bxSlider({
		mode: 'vertical',
		controls: true,
		startSlide: 0,
		infiniteLoop: true,
		pager: false,
		auto: true, 
		autoControls: false,
		video: false,
		pause: 4000, 
		speed: 500,
		easing: 'easeInOutQuad',
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<span class="fa fa-chevron-up" aria-hidden="true"></span>',
		prevText: '<span class="fa fa-chevron-down" aria-hidden="true"></span>'
		
	});
});

		