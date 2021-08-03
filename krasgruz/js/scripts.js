/*
 * Java-скрипты
 */

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
	
	
	/*Fix menu */
	
	$(document).ready(function(){
	        var $menu = $("#main-menu");
	        $(window).scroll(function(){
	            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
	                $menu.removeClass("default").addClass("fixed");
	            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
	                $menu.removeClass("fixed").addClass("default");
			}
		});//scroll
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

	
	/* slimbox2 */
		$(document).ready(function(){
			$('a.slimbox').slimbox({
			counterText: "Изображение {x} из {y}"
			});
		});
	
	/* owl-carousel otzivi-on-main */
		$(document).ready(function() {
           $("#otzivi-block").owlCarousel({
				items : 2,
				navigation : false,
				pagination : true,
				paginationNumbers: false,
				responsive: true,
				responsiveRefreshRate : 200,
				responsiveBaseWidth: window,
				baseClass : "owl-carousel",
				theme : "owl-theme",
				dragBeforeAnimFinish : true,
				mouseDrag : true,
				touchDrag : true
				
		   });
         });
		 
		 /*
	$(document).ready(function(){ 
	  $('#main-menu').waypoint(function() {
	      alert( $(this).attr('id') );
	    }
	  )
	});*/
		