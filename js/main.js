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
var owl = $('.about-carousel');
owl.owlCarousel({
    items: itemsCount,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
});
$(function () {
    $('#ri-grid').gridrotator({
        // number of rows
        rows: 2,

        // number of columns 
        columns: 6,

        // rows/columns for different screen widths
        // i.e. w768 is for screens smaller than 768 pixels
        w1024: {
            rows: 3,
            columns: 2
        },

        w768: {
            rows: 2,
            columns: 2
        },

        w480: {
            rows: 2,
            columns: 2
        },

        w320: {
            rows: 2,
            columns: 2
        },
        step: 'random',
        maxStep: 3,

        // prevent user to click the items
        preventClick: true,

        // animation type
        // showHide || fadeInOut || slideLeft || 
        // slideRight || slideTop || slideBottom || 
        // rotateLeft || rotateRight || rotateTop || 
        // rotateBottom || scale || rotate3d || 
        // rotateLeftScale || rotateRightScale || 
        // rotateTopScale || rotateBottomScale || random
        animType: 'random',

        // animation speed
        animSpeed: 500,

        // animation easings
        animEasingOut: 'linear',
        animEasingIn: 'linear',

        // the item(s) will be replaced every 3 seconds
        // note: for performance issues, the time "can't" be < 300 ms
        interval: 3000,
        // if false the animations will not start
        // use false if onhover is true for example
        slideshow: true,
        // if true the items will switch when hovered
        onhover: false,
        // ids of elements that shouldn't change
        nochange: []
    });

});