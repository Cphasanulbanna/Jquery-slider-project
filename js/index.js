$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin: 15,
        items: 4,
        nav: true,
        loop: true,
        dots: true,
        responsive: {
            0 : {
                items: 1,
                nav: false,
            },
            640 : {
                items: 2,
            },
            980 : {
                items: 4,
            },
        },
    });
});