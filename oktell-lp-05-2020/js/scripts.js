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
      var destination = $(elementClick).offset().top-50;
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

$(function() {
/**
 * H1 animate
 */
    setInterval(() => {
        $('.special-offer h1').removeClass('animate__animated').removeClass('animate__flash');
        setTimeout( () => {
            $('.special-offer h1').addClass('animate__animated').addClass('animate__flash');
        }, 1000);
    }, 1000);
});

/**
 * input placeholder minimize
 */
$(document).ready(function() {
    $('.form-discount input').focus(function(){
      placeholder = $(this).attr('placeholder');
      if(placeholder != undefined){
        $(this).parent().addClass('position-relative');
        $(this).parent().prepend('<span class="discount-placeholder">'+placeholder+'</span>');
      }
    });
    $('.form-discount input').blur(function(){
      $(this).parent().find('.discount-placeholder').remove();
    });
    $('.form-contacts input').focus(function(){
        placeholder = $(this).attr('placeholder');
        if(placeholder != undefined){
          $(this).parent().addClass('position-relative');
          $(this).parent().prepend('<span class="contacts-placeholder">'+placeholder+'</span>');
        }
      });
      $('.form-contacts input').blur(function(){
        $(this).parent().find('.contacts-placeholder').remove();
      });
  });

/* Swiper Slider Init */
$(function() {

  const mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      //direction: 'vertical',
      autoplay: false,
      speed: 500,
      loop: true,

      slidesPerView: 5,
      spaceBetween: 70,
  
      // If we need pagination
      /*pagination: {
        el: '.swiper-pagination',
      },*/
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // And if we need scrollbar
      /*scrollbar: {
        el: '.swiper-scrollbar',
      },*/
  })
});

// CallUs button show/hide function
$(function() {
  $('#callUs').on('click', function() {
    if( $('#callback').hasClass('d-none') ) {
      $(this).css({
        'backgroundColor': 'white',
        'color': '#000',
      });
      $(this).find('svg').removeClass('fa-phone-alt').addClass('fa-times');
      $('#callback').removeClass('d-none');
    } else {
      $(this).css({
        'backgroundColor': '#ff5500',
        'color': '#fff',
      });
      $(this).find('svg').removeClass('fa-times').addClass('fa-phone-alt');
      $('#callback').addClass('d-none');
    }
    
  });
});


// ajax: modal form submit
$(document).on('submit', '#modalOrder form', function(e) {
  e.preventDefault();
  const form = $(this).serialize();
  $.ajax({
      url: 'ajax/modal.php',
      data: form,
      type: 'POST',
      success: (res) => {
          if( !res ) console.log('(ajax) success but res wrong or empty');
          $('#modalOrder .modal-body h2').hide();
          $('#modalOrder .modal-body p').hide();
          $('#modalOrder .modal-footer p').hide();
          $('#modalOrder .modal-footer button').removeClass('d-none');
          $(this).hide();
          $('#modalOrder .modal-body').append(`
              <div class="m-3 text-center">
                  <h2 class="mt-5">${res}, Ваша заявка зарегистрирована</h2>
                  <p class="my-4 p-2">Спасибо, что обратились в компанию Oktell!</p>
                  <p class="my-4 p-2">Наш менеджер свяжется с вами в ближайшее время и предоставит консультацию по нашим продуктам и услугам</p>
              </div>
          `);
      },
      error: (err) => {
          console.log('Error! send modal: ' + JSON.stringify(err));
      },
  });
});

// ajax: discount form submit
$(document).on('submit', '.form-discount', function(e) {
  e.preventDefault();
  const form = $(this).serialize();
  $.ajax({
      url: 'ajax/discount.php',
      data: form,
      type: 'POST',
      success: (res) => {
          if( !res ) console.log('(ajax) success but res wrong or empty');
          $(this).closest('div').find('h4').hide();
          $(this).closest('div').find('p').hide();
          $(this).removeClass('d-md-flex').hide();
          $(this).closest('div').append(`
              <div class="mt-3 mb-4 px-3 text-center text-white">
                  <h2 class="mt-5">Ваша заявка зарегистрирована</h2>
                  <p class="my-4 p-2">Наш менеджер свяжется с вами в ближайшее время и предоставит консультацию по нашим продуктам и услугам</p>
              </div>
          `);
      },
      error: (err) => {
          console.log('Error! send discount: ' + JSON.stringify(err));
      },
  });
});


// ajax: contacts form submit
$(document).on('submit', '.form-contacts', function(e) {
    e.preventDefault();
    const form = $(this).serialize();
    $.ajax({
        url: 'ajax/contacts.php',
        data: form,
        type: 'POST',
        success: (res) => {
            if( !res ) console.log('(ajax) success but res wrong or empty');
            $(this).closest('div').find('p').hide();
            $(this).hide();
            $(this).closest('div').append(`
                <div class="mb-4 p-3 p-md-4 text-center text-black bg-white border">
                    <h2 class="mt-5">${res}, Ваша заявка зарегистрирована</h2>
                    <p class="my-4 p-2">Наш менеджер свяжется с вами в ближайшее время и предоставит консультацию по нашим продуктам и услугам</p>
                </div>
            `);
        },
        error: (err) => {
            console.log('Error! send contacts: ' + JSON.stringify(err));
        },
    });
});

// ajax: callback form submit
$(document).on('submit', '#callback form', function(e) {
    e.preventDefault();
    const form = $(this).serialize();
    $.ajax({
        url: 'ajax/callback.php',
        data: form,
        type: 'POST',
        success: (res) => {
            if( !res ) console.log('(ajax) success but res wrong or empty');
            $(this).closest('div').find('h2').hide();
            $(this).closest('div').find('p').hide();
            $(this).hide();
            $(this).closest('div').append(`
                <div class="mb-4 p-3 p-md-4 text-center text-black bg-white border">
                    <h3>Ваша заявка зарегистрирована</h3>
                    <p class="my-4 p-2">Наш менеджер свяжется с вами в ближайшее время и предоставит консультацию по нашим продуктам и услугам</p>
                </div>
            `);
        },
        error: (err) => {
            console.log('Error! send callback: ' + JSON.stringify(err));
        },
    });
});