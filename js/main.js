$(function () {
    $('.bike-slider, .slider__items').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    
    $(".menu, bike__column").on("click", "a", function (event) {
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
    
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
    
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });

});









// window.onload = function() {
//     document.querySelector('.preloader').classList.add("preloader-remove");
// };


