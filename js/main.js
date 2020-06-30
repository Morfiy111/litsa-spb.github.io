$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 700,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('autoplay.play.owl', [4000])
})
$('.stop').on('click', function () {
    owl.trigger('autoplay.stop.owl')
})

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

jQuery(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.black-line-menu').addClass('fixed');
        }
        else if ($(this).scrollTop() < 600) {
            $('.black-line-menu').removeClass('fixed');
        }
    });
});

var itemsCount = 3;
if (window.matchMedia("(max-width: 991px)").matches) {
    itemsCount = 3;
}
if (window.matchMedia("(max-width: 767px)").matches) {
    itemsCount = 2;
}
if (window.matchMedia("(max-width: 478px)").matches) {
    itemsCount = 1;
}
var owl = $('.owl-shares');
owl.owlCarousel({
    items: itemsCount,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});

$(document).ready(function () {
    $(".price-list-links").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
$(document).ready(function () {
    $(".main-arrow-down").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});