$(function() {

    /* Carousel */
    $('#myCarousel').carousel({
        interval: 4000
    });

    $('#myCarousel').on('slide.bs.carousel', function() {
        $('.carousel-caption').css('display', 'none');
    });

    $('#myCarousel').on('slid.bs.carousel', function() {
        $('.carousel-inner > .item.active .carousel-caption').fadeIn("slow");
    });

    $(".carousel-inner").swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('next');
        },
        swipeRight: function() {
            $(this).parent().carousel('prev');
        },
        threshold: 0
    });
    /***********/

    $(".social-networks li a").hover(
        function() {
            $(this).children('.normal').animate({
                marginTop: '-31px'
            }, 200);
        }, function() {
            $(this).children('.normal').animate({
                marginTop: '0px'
            }, 200);
        }
    );

    $(".link-portfolio").hover(
        function() {
            var opac = 1;
            $(this).children('.overlay-portfolio').animate({
                opacity: opac
            }, 500);
        }, function() {
            $(this).children('.overlay-portfolio').animate({
                opacity: 0
            }, 500);
        }
    );

    if (!device.mobile() && !device.tablet()) {
        $(".section-colored.home").css('background-attachment', 'fixed');
        $(".section-colored.home").parallax("0%", 0.4);
    }

    /* Placeholder fallback for older browsers */
    $('input, textarea').placeholder();
});