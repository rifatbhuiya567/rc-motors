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
    });
}(jQuery));