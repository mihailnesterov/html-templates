$(document).ready(function(){

	$(".poik img").each(function() {
		if ($(this).attr("src") != "") {
		} else {
			$(this).addClass("noiconphts");
		} 
	});
	$(".noiconphts").closest(".poik").remove();
	
	$(".mobil_menu").click(function(){
		$(".mobile_line").toggleClass("activ");
		$(".closeback").toggleClass("activ");
		$("body").toggleClass("noscroll");
	});
	
	$(".closeback").click(function(){
		$(".mobile_line").removeClass("activ");
		$(".closeback").removeClass("activ");
		$("body").removeClass("noscroll");
	});
	
	$(".mobil_search").click(function(){
		$(".mobsearch").toggleClass("act");
	});

	$("#phone").mask("+7 (999) 999-9999");

	$('.left_slider').unslider({
		animation: 'horizontal', 
		delay: 15000, 
		autoplay: true, 
		arrows: true,
		nav: false
	});

	$('.right_slider').unslider({
		animation: 'horizontal',
		delay: 450000, 
		autoplay: true, 
		arrows: true,
		nav: false
	});

    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:3,
        slideMargin:0,
        enableDrag: true,
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }   
    });  

	$('#cartImages').lightSlider({
		gallery:true,
		item:1,
		loop:true,
		thumbItem:3,
		slideMargin:0,
		enableDrag: true
	});  

	$( '.swipebox' ).swipebox();
	
	$( '.swipebox-video' ).swipebox();

	$( '#gallery' ).click( function( e ) {
		e.preventDefault();
		$.swipebox( [
			{ href : 'http://swipebox.csag.co/mages/image-1.jpg', title : 'My Caption' },
			{ href : 'http://swipebox.csag.co/images/image-2.jpg', title : 'My Second Caption' }
		] );
	} );

	$('.licens').owlCarousel({
		loop:false,
		items:7,
		margin:10,
		nav:true,
		navText: [],
		responsive:{
			0:{
				items: 2,
				margin:10
			},
			768:{
				items: 4,
				margin:10
			},
			960:{
				items: 5,
				margin:10
			},
			1260:{
				items: 7,
				margin:10
			}
		}
	});

	$('.catsimgslid').owlCarousel({
		loop:false,
		items:1,
		margin:0,
		nav:true,
		navText: [],
		responsive:{}
	});


	$('.callback_form').fancybox({
		padding : 0,
		openEffect  : 'elastic',
		closeEffect  : 'elastic',
		closeBtn: true,
		maxWidth: 500,
		maxHeight: 400,
		openSpeed: 150,
		closeSpeed: 150
	});
		
	$(".dolg").click(function(){
		$(".tabsimgs div").removeClass("activ");
		$(".dolgo").addClass("activ");
	});
	
	$(".cra").click(function(){
		$(".tabsimgs div").removeClass("activ");
		$(".crat").addClass("activ");
	});
	
	$(".cart_images img").each(function() {
		if ($(this).attr("src") != "") {
		} else {
			$(this).addClass("noiconpht");
		}
	});
	
})

setTimeout(function(){

	$(".cart_images img").each(function() {
		if ($(this).attr("src") != "") {
		} else {
			$(this).addClass("noiconpht");
			$(".cart_images li").addClass("cartimgli");
		} 
	});
	
	$(".noiconpht").closest(".cart_images li").remove();
	$(".noiconpht").closest(".cartimgli").remove();

},100)
