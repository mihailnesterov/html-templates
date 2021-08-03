/* JavaScript */

/**
 *  include header, footer
 */
$(function(){
    //const header = $("#include-header");
    //const footer = $("#include-footer");
    //$("#include-footer").load("../footer.html");
    /*if($("div").is("#include-header")) {
        $("#include-header").load("header.html");
    }
    if($("div").is("#include-footer")) {
        $("#include-footer").load("footer.html"); 
    }*/
    /*fetch("./footer.html")
    .then(response => {
    return response.text()
    })
    .then(data => {
    document.querySelector("#footer").innerHTML = data;
    });*/
});
    
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

// catalog filter toggle
$(function() { 
    $('#catalog-filter-toggle').on('click', (e) => {
        const self = e.target;
        if($('#catalog-filter').hasClass('d-none')) {
            $('#catalog-filter').removeClass('d-none');
        } else {
            $('#catalog-filter').addClass('d-none');
        }
        
    });
});

$(function() { 
    $('.card a[data-toggle="modal"]').on('click', (e) => {
        const self = e.target;
        //console.log($(self).closest('.card').find('h5 b').html());
        const modal = $('#oneClickOrder .modal-body');
        $(modal).find('h4').html($(self).closest('.card').find('h4 a').html());
        $(modal).find('img').attr('src',$(self).closest('.card').find('img').attr('src'));
        $(modal).find('h5 span').html($(self).closest('.card').find('h5 b').html());
        $('#input-one-click-order').mask('+7-999-999-99-99');
    });
    
});

/**
 * bootstrap4 multilevel menu script
 * https://forum.tamirov.ru/viewtopic.php?f=37&t=230
 */
$(function() {
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
  
      $(this).siblings().toggleClass("show");
  
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });
  
    });
});
/**
 * bootstrap4 menu on hover instead on click
 */
$('.nav-link').hover(function() {
    $(this).trigger('click');
}, function() { });

$("ul.dropdown-menu [data-toggle='dropdown']").hover(function() {
    $(this).trigger('click');
}, function() { });
