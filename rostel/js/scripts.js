/* JavaScript */

   
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

/* Main menu fixed */
$(function() { 
    $(window).scroll(function() { 
        if($(this).scrollTop() != 0) {  
            
            $('#main-menu-container')
                .removeClass('mt-3')
                .removeClass('col-md-8')
                .removeClass('offset-md-1')
                .addClass('border-bottom')
                .addClass('fixed-top');

        } else {	 
            
            $('#main-menu-container')
                .removeClass('fixed-top')
                .removeClass('border-bottom')
                .removeClass('offset-md-2')
                .addClass('mt-3')
                .addClass('offset-md-1')
                .addClass('col-md-8');
        }	 
    }); 
        
});

/* Support Modal */

function addSupportModalHtml() {
    $('#support-modal').html(`
        <h5 class="text-rt-orange mb-3">Оставить заявку</h5>
        <form class="support-modal-form" action="" method="POST">
            <div class="form-group">
                <input type="text" class="form-control" id="support-modal-name" name="support-modal-name" placeholder="Ваше имя *" required>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" id="support-modal-email" name="support-modal-email" placeholder="Ваш Email *" required>
            </div>
            <div class="form-group">
                <textarea class="form-control" id="support-modal-message" name="support-modal-message" cols="4" placeholder="Сообщение"></textarea>
            </div>
            <button type="submit" id="support-modal-btn" name="support-modal-btn" class="btn btn-rt-orange-small">Отправить</button>
        </form>
    `);
}

$(function() { 
    addSupportModalHtml();
});

$('#support-button').on('click', function() {
    const supportModal = $('#support-modal');
    if( $(supportModal).hasClass('d-none') ) {
        $(supportModal).removeClass('d-none');
    } else {
        $(supportModal).addClass('d-none');
    }
    
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
