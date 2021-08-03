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
	        var $menu = $("#menu-on-main");
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
	
	/* active-menu-aside */
		function ActiveLinksAside(id){
			try{
				var el=document.getElementById(id).getElementsByTagName('a');
					var url=document.location.href;
					for(var i=0;i<el.length; i++){
					if (url==el[i].href){
					el[i].className = 'active_menu_aside';
					};
				};
			}
			catch(e){}
			};
			
	/* active-menu-personal */
		function ActiveLinksPersonal(id){
			try{
				var el=document.getElementById(id).getElementsByTagName('a');
					var url=document.location.href;
					for(var i=0;i<el.length; i++){
					if (url==el[i].href){
					el[i].className = 'active_menu_personal';
					};
				};
			}
			catch(e){}
			};
	
	/* active-menu-courses */
		function ActiveLinksCourses(id){
			try{
				var el=document.getElementById(id).getElementsByTagName('a');
					var url=document.location.href;
					for(var i=0;i<el.length; i++){
					if (url==el[i].href){
					el[i].className = 'active_menu_courses';
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
	
	/* owl-carousel slider */
		$(document).ready(function() {
           $("#slider-block").owlCarousel({
				items : 1,
				navigation : true,
				navigationText : ["<",">"],
				pagination : false,
				paginationNumbers: false,
				responsive: true,
				responsiveRefreshRate : 200,
				responsiveBaseWidth: window,
				baseClass : "owl-carousel",
				theme : "owl-theme",
				dragBeforeAnimFinish : true,
				mouseDrag : true,
				touchDrag : true,
				autoPlay : true,
				stopOnHover : true,
				autoHeight : true
				
		   });
         });
		