$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
         slidesToScroll: 1,
         variableWidth: true
    });

    $('.slidertwo').slick({
        infinite: true,
        slidesToShow: 1,
         slidesToScroll: 1,
         variableWidth: true,
         arrows: false
    });
    
});
new Swiper('.swiper-container',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    
    coverflowEffect: {
        rotate: 0,
        stretch: 19,
        depth: 290,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            depth: 0,
            slidesPerView: 3,
        }
    },
    
});
