(function() {
    "use strict";

    // Window Load
    $(window).load(function(){
        $(".btt i").hide();
    });
      
    // Window Scroll
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
    
        if( scrolling > 100){
        $(".main-header").addClass("sticky-nav");
        }
        else{
        $(".main-header").removeClass("sticky-nav");
        }
    
        if( scrolling > 200){
            $(".btt i").fadeIn(500);
        }
        else{
            $(".btt i").fadeOut(500);
        }
    });
      
    // On Click BTT
    $(".btt i").click(function(){
        $("html, body").animate({
            scrollTop:0
        },500)
    });

    // Service Dropdown
    $(".mobile-services-dropdown-menu").hide();
    $(".services-dropdown-toggle").click(function() {
        $(".mobile-services-dropdown-menu").toggle(500);
        $(".dropdown-li").toggleClass("clicked");
    })

    // Hero Slider
    function heroSlider() {
        let heroSlider = $('.hero-slider');
        heroSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.slider-content:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });

        heroSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.slider-content[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });

        heroSlider.slick({
            autoplay: true,
            autoplaySpeed: 6000,
            infinite: false,
            speed: 500,
            dots: false,
            arrows: true,
            fade: true,
            cssEase: 'linear',
            prevArrow: '.prev',
            nextArrow: '.next',
        });

        function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    heroSlider();

    // Text Slider
    $(".text-slider").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        speed: 500,
        dots: true,
        arrows: false,
    });
}(jQuery));