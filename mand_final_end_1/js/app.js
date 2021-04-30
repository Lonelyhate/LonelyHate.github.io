$(document).ready(function(){
    $('.slider').slick({
        responsive:[
            {
                breakpoint: 630,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.slidertrk').slick({
        arrows: false,
        dots: true,
        fade: true,
        draggable: false,
        swipe: false
    });

    $('.header-burger').click(function(event) {
        $('.header-burger, .nav').toggleClass('active');
    });

    
});