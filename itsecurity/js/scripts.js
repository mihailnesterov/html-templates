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

/* Swiper Slider Init */
$(function() {
    const mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        //direction: 'vertical',
        autoplay: true,
        speed: 500,
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    })
});

/* Filter on main page */
$(function() { 

    function setFilter(e) {
        e.preventDefault();
        const active = e.currentTarget;
        $('.filter-main-left div').removeClass('active');
        $('.filter-main-mobile a').removeClass('active');
        $(active).closest('div').addClass('active');
        if($(active).closest('div').hasClass('filter-main-mobile'))
            $(active).addClass('active');

        
        $('.filter-main-center ul li').each( (index, el) => {
            console.log($(el).data('filter'));
            if( $(el).data('filter') === $(active).data('filter')) {
                $(el).removeClass('d-none');
            } else {
                $(el).addClass('d-none');
            }
        });
    }

    $('.filter-main-left a').on('click', (e) => {
        setFilter(e);
    });

    $('.filter-main-mobile a').on('click', (e) => {
        setFilter(e);
    });
});

/* Filter on courses page */
$(function() { 

    function setFilter(e) {
        e.preventDefault();
        const active = e.currentTarget;
        $('.filter-courses-left div').removeClass('active');
        $('.filter-courses-mobile a').removeClass('active');
        $(active).closest('div').addClass('active');
        if($(active).closest('div').hasClass('filter-courses-mobile'))
            $(active).addClass('active');

        
        $('.filter-courses-center ul li').each( (index, el) => {
            console.log($(el).data('filter'));
            if( $(el).data('filter') === $(active).data('filter')) {
                $(el).removeClass('d-none');
            } else {
                $(el).addClass('d-none');
            }
        });
    }

    $('.filter-courses-left a').on('click', (e) => {
        setFilter(e);
        $('.filter-dropdown').is(':hidden') ? $('.filter-dropdown').show() : $('.filter-dropdown').hide();
        $('.bg-overlay').is(':hidden') ? $('.bg-overlay').show() : $('.bg-overlay').hide();
    });

    $('.filter-courses-mobile a').on('click', (e) => {
        setFilter(e);
    });

});

/* News on main page: different quantity on different resolutions */
function changeNewsCountOnResize() {
    // news on main page tag
    const $news = $('.news-on-main ul li');
    // object, has range of screen resolutions (start,end), qty = quantity of news on this resolution
    const resolutions = {
        xxs: {
            start: 0,
            end: 319,
            qty: 2
        },
        xs: {
            start: 320,
            end: 374,
            qty: 2
        },
        sm: {
            start: 375,
            end: 414,
            qty: 3
        },
        md: {
            start: 415,
            end: 767,
            qty: 5
        },
        lg: {
            start: 768,
            end: 1023,
            qty: 2
        },
        xl: {
            start: 1024,
            end: 1365,
            qty: 5
        },
        xxl: {
            start: 1366,
            end: 1900,
            qty: 10
        },
        
    };

    for (line in resolutions) {
        let count = 0;
        const qty = resolutions[line].qty;
        $news.each( (index,el) => {
            count = index+1;
            if($(window).width() > (resolutions[line].start - 0.1)
                && $(window).width() < resolutions[line].end + 0.1) {
                count > qty ? $(el).addClass('d-none') : $(el).removeClass('d-none');
            } 
        });
    }
}
$(function() {
    // set news qty on document ready
    changeNewsCountOnResize();
});

// set news qty on window resize event
window.addEventListener("resize", changeNewsCountOnResize);

// Full version toggle
$('#full-version').on('click', function() {
    $('.bg-spinner').show();
    setTimeout( () => {

        $('.navbar-nav .nav-item').removeClass('d-none');
        $('#main-menu .nav-item').removeClass('d-md-none');
        
        $('.swiper-container').removeClass('d-none');
        $('#filter-main').show();
        $('.filter-main-center').removeClass('col-md-9');
        if( $('.blocks-on-main').hasClass('d-none') ) {
            $('.blocks-on-main').removeClass('d-none');
        }
        if( $('.blocks-on-main').hasClass('d-md-flex') ) {
            $('.blocks-on-main').removeClass('d-md-flex');
            $('.blocks-on-main').addClass('d-flex');
        }
        if( $('.blocks-on-main__partner').hasClass('pt-sm-0') ) {
            $('.blocks-on-main__partner').removeClass('pt-sm-0');
        }
        if( $('.blocks-on-main__partner').hasClass('pt-md-0') ) {
            $('.blocks-on-main__partner').removeClass('pt-md-0');
        }

        const mySwiperFullVersion = new Swiper ('.swiper-container', {
            // Optional parameters
            //direction: 'vertical',
            autoplay: true,
            speed: 500,
            loop: true,
        
            // If we need pagination
            pagination: {
            el: '.swiper-pagination',
            },
        
            // Navigation arrows
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        
            // And if we need scrollbar
            scrollbar: {
            el: '.swiper-scrollbar',
            },
        })

        $('.bg-spinner').hide();
    },500);
    
    
});

$('.filter-dropdown .filter-item').on('click', (e) => {

    const filter = e.currentTarget;

    if( !$(filter).hasClass('selected') ) {
        
        $(filter).addClass('selected');

        $('.filter-courses-selected').append(`
            <li class="mb-2">
                <a href="#" class="font-weight-500">
                  X  <span>${ $(filter).text() }</span> 
                </a>
            </li>
        `);
        $('.filter-courses-selected li a').on('click', function(e) {
            e.preventDefault();
            $(this).closest('li').remove();
            
            if( !$('.filter-courses-selected li').length ) {
                $('.filter-courses-right h5').text('Фильтры не выбраны');
            }

            $('.filter-dropdown .filter-item').each( function() {

                $(this).removeClass('selected');
                
            });
        });

        $('.filter-courses-right h5').text('Выбранные фильтры');

    } else {
        
        $(filter).removeClass('selected');

        $('.filter-courses-selected li a span').each( function() {

            if( $(this).html() === $(filter).html() ) {
                $(this).closest('li').remove();
            }
            
        });

        
        if( !$('.filter-courses-selected li').length ) {
            $('.filter-courses-right h5').text('Фильтры не выбраны');
        }
        
    }

});

$('.filter-courses-selected li a').on('click', function(e) {
    e.preventDefault();
    $(this).closest('li').remove();
    
    if( !$('.filter-courses-selected li').length ) {
        $('.filter-courses-right h5').text('Фильтры не выбраны');
    }
});

$('.bg-overlay').on('click', (e) => {
    $(e.currentTarget).hide();
    $('.filter-dropdown').hide();
});

$('.dropdown-area__btn-block').on('click','button', () => {
    $('.filter-dropdown').hide();
    $('.bg-overlay').hide();
});

$('.filter-courses-clear a').on('click', (e) => {
    
    e.preventDefault();

    if( $('.filter-courses-selected li') ) {
        
        $('.filter-courses-selected li a span').each( function() {
        
            $(this).closest('li').remove();
            
            $('.filter-courses-right h5').text('Фильтры не выбраны');
 
        });

    }

    $('.filter-dropdown .filter-item').each( function() {

        $(this).removeClass('selected');
        
    });

});

$(document).keyup(function(e) { 
    if (e.which === 27) $('.bg-overlay').click(); // esc   
    e.preventDefault();
    e.stopPropagation();
});

$('.course-page-tabs_item a').on('click', (e) => {
    e.preventDefault();
    const currTabBtn = e.target;
    $('.course-page-tabs_item').each( function() {
        $(this).removeClass('active');        
    });
    $(currTabBtn).closest('.course-page-tabs_item').addClass('active');
    $('.course-page-tab').each( function() {

        if( $(this).data('filter') === $(currTabBtn).data('filter') ) {
            $(this).addClass('active');
            const notInAbout = [
                'Статус ',
                'Описание программы ',
                'Аннотация ',
                'Программа курса '
            ];
            const notInProgram = [
                'Статус ',
                'Описание программы ',
                'Аннотация ',
                'Аудитория ',
                'Пакет слушателя ',
                'Дополнительно ',
                'Последующее обучение ',
                'Входит в комплексные программы ',
                ' Входит в комплексные программы ',
                'Предварительная подготовка ',
                'В результате обучения ',
                'Пакет слушателя ',
                'Дополнительно'
                //'Отзывы наших слушателей о курсе '
            ];

            if( $(currTabBtn).data('tab') ) {

                const tab =  $(currTabBtn).data('tab');

                if ($('.course-page-tab.about-program .content').length) {
        
                    const courseContent = $('.course-page-tab.about-program .content');
                    const h3 = $(courseContent).find('h3');
                                       
                    $(h3).addClass('d-none');
                    $(h3).next('p').addClass('d-none');

                    $(courseContent).find('h4').each( function() {
                        const h4 = $(this);
                        $(h4).removeClass('d-none');
                        $(h4).nextUntil('h4').each(function() {
                            $(this).removeClass('d-none');
                        });
                    });

                    $(courseContent).find('h4').each( function() {
                        const h4 = $(this);
                        if( tab === 'about') {
                            notInAbout.map( item => {
                                if( item === $(h4).text() ) hideH4(h4);
                            });
                        }
                        if( tab === 'program') {
                            notInProgram.map( item => {
                                if( item === $(h4).text() ) hideH4(h4);
                            });
                        }
                    });
                }
            }
        } else {
            $(this).removeClass('active');
        }

    });
});

function hideH4(h4) {
    $(h4).addClass('d-none');
    $(h4).nextUntil('h4').each(function() {
        $(this).addClass('d-none');
    });
}

$( function() {
    if ($('.course-page-tab').length) {
        $('.course-preview-right div p').each(function() {
            $(this).remove();
        });
        const courseExcerpt = ['Аннотация ','Описание программы '];
        if( $('.course-page-tab.about-program .content').length ) {
            $('.course-page-tab.about-program .content h4').each(function() {
                const h4 = $(this);
                courseExcerpt.map( item => {
                    if( item === $(h4).text()) {
                        $(h4).nextUntil('h4').each(function() {
                            $('.course-preview-right div').append( $(this) );
                        });
                        console.log(item, $(h4).text());
                    }
                });
            });
            if( $('.course-preview-right div p').length ) {
                $('.course-preview-right div p').each(function() {
                    $(this).addClass('mb-2');
                });
                $('.course-preview-right div p:last-child').removeClass('mb-2');
            }
        }

        $('.course-page-tabs_item a')[0].click();
    }
});